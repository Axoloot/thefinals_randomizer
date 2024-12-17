resource "aws_s3_bucket" "the_finals" {
  bucket        = "the-finals-randomizer"

  force_destroy = false
  object_lock_enabled = false
}

resource "aws_s3_bucket_policy" "the_finals_s3" {
  bucket = aws_s3_bucket.the_finals.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.the_finals.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.s3_distribution.arn
          }
        }
      }
    ]
  })
}
