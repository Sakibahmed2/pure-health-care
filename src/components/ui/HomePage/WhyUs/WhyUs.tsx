import assets from "@/assets";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import chooseUs from "@/assets/choose-us.png";
import Image from "next/image";

const servicesData = [
  {
    imageSrc: assets.svgs.award,
    title: "Award Winning Service",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Best Quality Pregnancy Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Complete Medical Equipments",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Dedicated Emergency Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
];

const WhyUs = () => {
  return (
    <Container>
      <Box>
        <Box textAlign={"center"}>
          <Typography
            color="primary.main"
            variant="h6"
            component="h1"
            fontWeight={600}
          >
            Why us
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Why choose use
          </Typography>
        </Box>

        <Box>
          <Grid container spacing={2} my={5}>
            <Grid item md={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  bgcolor: "rgba(245, 245, 245, 1)",
                  padding: "25px",
                  alignItems: "center",
                  borderRadius: "10px 10px 90px 10px",
                }}
              >
                <Box>
                  <Image
                    src={servicesData[0].imageSrc}
                    width={50}
                    height={50}
                    alt="award"
                  />
                </Box>
                <Box>
                  <Typography variant="h6" component={"h6"} fontWeight={600}>
                    {servicesData[0].title}
                  </Typography>
                  <Typography variant="body2" component={"h6"}>
                    {servicesData[0].description}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  bgcolor: "rgba(245, 245, 245, 1)",
                  padding: "25px",
                  alignItems: "center",
                  borderRadius: "10px 90px 10px 10px",
                  margin: "20px 0",
                }}
              >
                <Box>
                  <Image
                    src={servicesData[1].imageSrc}
                    width={50}
                    height={50}
                    alt="award"
                  />
                </Box>
                <Box>
                  <Typography variant="h6" component={"h6"} fontWeight={600}>
                    {servicesData[1].title}
                  </Typography>
                  <Typography variant="body2" component={"h6"}>
                    {servicesData[1].description}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  bgcolor: "rgba(245, 245, 245, 1)",
                  padding: "25px",
                  alignItems: "center",
                  borderRadius: "10px 10px 90px 10px",
                }}
              >
                <Box>
                  <Image
                    src={servicesData[2].imageSrc}
                    width={50}
                    height={50}
                    alt="award"
                  />
                </Box>
                <Box>
                  <Typography variant="h6" component={"h6"} fontWeight={600}>
                    {servicesData[2].title}
                  </Typography>
                  <Typography variant="body2" component={"h6"}>
                    {servicesData[2].description}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  bgcolor: "rgba(245, 245, 245, 1)",
                  padding: "25px",
                  alignItems: "center",
                  borderRadius: "10px 90px 10px 10px",
                  margin: "20px 0",
                }}
              >
                <Box>
                  <Image
                    src={servicesData[3].imageSrc}
                    width={50}
                    height={50}
                    alt="award"
                  />
                </Box>
                <Box>
                  <Typography variant="h6" component={"h6"} fontWeight={600}>
                    {servicesData[3].title}
                  </Typography>
                  <Typography variant="body2" component={"h6"}>
                    {servicesData[3].description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                display: "flex",
              }}
            >
              <Box margin={"0 auto"}>
                <Image src={chooseUs} height={500} alt="choose us" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default WhyUs;
