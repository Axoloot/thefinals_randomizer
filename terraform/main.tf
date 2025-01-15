terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  alias  = "eu-west-1"
  region = "eu-west-1"
}

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

module "cloudfront" {
  source = "/home/axo/CurrentProjects/tfCloudfront"

  domain       = "the-finals-roulette.site"
  bucket_name  = "the-finals-randomizer"
  domain_names = ["the-finals-roulette.site", "www.the-finals-roulette.site"]
  subject_alternative_names = [
    "*.the-finals-roulette.site",
    "the-finals-roulette.site",
    "mailer.the-finals-roulette.site",
    "www.the-finals-roulette.site",
  ]
}
