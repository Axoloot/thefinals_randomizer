resource "aws_cloudfront_distribution" "s3_distribution" {
  price_class              = "PriceClass_All"

  origin {
    domain_name              = aws_s3_bucket.the_finals.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.the_finals.id
    origin_id                = aws_s3_bucket.the_finals.bucket_regional_domain_name
  }

  default_root_object = "index.html"
  enabled             = true
  http_version        = "http2"
  is_ipv6_enabled     = true

  default_cache_behavior {
    allowed_methods = [
      "GET",
      "HEAD",
    ]
    cache_policy_id = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    cached_methods = [
      "GET",
      "HEAD",
    ]
    compress                 = true
    origin_request_policy_id = "88a5eaf4-2fd4-4709-b370-b4c650ea3fcf"
    target_origin_id         = aws_s3_bucket.the_finals.bucket_regional_domain_name
    viewer_protocol_policy   = "redirect-to-https"

    function_association {
      event_type   = "viewer-request"
      function_arn = "arn:aws:cloudfront::786150492747:function/router"
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  tags = {
    Environment = "production"
  }
}

resource "aws_cloudfront_origin_access_control" "the_finals" {
  name                              = "the_finals"
  description                       = "The finals Policy"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}