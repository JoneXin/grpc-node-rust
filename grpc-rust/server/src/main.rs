use std::net::{Ipv4Addr, SocketAddrV4};
use tonic::{transport::Server, Request, Response, Status};
use voting::{ voting_server::{Voting, VotingServer}, Info, News, VotingRequest, VotingResponse};

pub mod voting {
    tonic::include_proto!("voting");
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let address = SocketAddrV4::new(Ipv4Addr::new(127, 0, 0, 1), 8080);

    println!("{}", address);
    let voting_service = VotingService::default();
    println!("{}", "grpc running in 127.0.0.1:8080");

    Server::builder()
        .add_service(VotingServer::new(voting_service))
        .serve(std::net::SocketAddr::V4(address))
        .await?;

    Ok(())
}

#[derive(Debug, Default)]
pub struct VotingService {}

#[tonic::async_trait]
impl Voting for VotingService {
    async fn vote(
        &self,
        request: Request<VotingRequest>,
    ) -> Result<Response<VotingResponse>, Status> {
        let r = request.into_inner();
        match r.vote {
            0 => Ok(Response::new(voting::VotingResponse {
                confirmation: { format!("Happy to confirm that you upvoted for {}", r.url) },
            })),
            1 => Ok(Response::new(voting::VotingResponse {
                confirmation: { format!("Confirmation that you downvoted for {}", r.url) },
            })),
            _ => Err(Status::new(
                tonic::Code::OutOfRange,
                "Invalid vote provided",
            )),
        }
    }

    async fn get_news(&self, request: Request<Info>) -> Result<Response<News>, Status> {
        let r = request.into_inner();
        println!("{:?}", r);
        let n = News {
            id: String::from("1"),
            title: String::from("1123"),
            body: String::from("5121"),
            post_image: String::from("1132"),
            age: vec![1, 23],
        };

        Ok(Response::new(n))
    }
}
