import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://scontent.fisb17-1.fna.fbcdn.net/v/t1.18169-9/23658913_746063488915707_4694491675193350814_n.jpg?stp=c0.79.480.480a_dst-jpg_s851x315&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeHYgP9SgyzSUz9gkW_Qw3SqsldILWAWaceyV0gtYBZpxyLKbBG8xfM5AchjYy6VZnnWtQR_Xd7ttFl1Z2jFkFSy&_nc_ohc=KLoXkRGpPasAX97hhk2&_nc_oc=AQlopojrNykLTAwbmApqpaXOUFZK7dmlPmhaVxrrOLfeW6Z8PEGmcJkivgRtfRG7Kir6cJTjXqIzuPAlSMIzr00y&tn=OLBGIP8ktIT63gc6&_nc_ht=scontent.fisb17-1.fna&oh=00_AfBl31PMDsl94dSI9RlZfb0rk1O1CwmFJ8cp0w34oW3Ulg&oe=63CE97E1";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <Avatar src={avatarSrc} boxSize={"28"} mt={["4", "0"]}  />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

