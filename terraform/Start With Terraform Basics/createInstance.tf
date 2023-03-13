
resource "aws_instance" "MyFirstInstnace" {
  count         = 2
  ami           = "ami-0735c191cf914754d"
  instance_type = "t2.micro"

  tags = {
    Name = "demoinstnce-${count.index}"
  }
}