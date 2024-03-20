import { Box, Container, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import facebook from "@/assets/landing_page/facebook.png";
import instagram from "@/assets/landing_page/instagram.png";
import twitter from "@/assets/landing_page/twitter.png";
import linkedin from "@/assets/landing_page/linkedin.png";

const Footer = () => {
  return (
    <Box bgcolor="secondary.main" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#ffff" component={Link} href="/">
            Consultation
          </Typography>
          <Typography color="#ffff" component={Link} href="/">
            Health Plans
          </Typography>
          <Typography color="#ffff" component={Link} href="/">
            Medicine
          </Typography>
          <Typography color="#ffff" component={Link} href="/">
            Diagnostics
          </Typography>
          <Typography color="#ffff" component={Link} href="/">
            NGOs
          </Typography>
        </Stack>
        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Image src={facebook} width={40} height={40} alt="facebook" />
          <Image src={instagram} width={40} height={40} alt="instagram" />
          <Image src={twitter} width={40} height={40} alt="facebook" />
          <Image src={linkedin} width={40} height={40} alt="facebook" />
        </Stack>
        <div className="border-b-2 border-dashed"></div>
        <Stack direction="row" gap={4} justifyContent="space-between" py={2}>
          <Typography color="#ffff" component="p">
            &copy;2024 Pure health care all rights reserved
          </Typography>
          <Typography variant="h5" fontWeight={600} color={"white"}>
            PU
            <Box component="span" color="primary.main">
              RE
            </Box>{" "}
            health care
          </Typography>
          <Typography color="#ffff" component="p">
            Privacy police! terms and conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
