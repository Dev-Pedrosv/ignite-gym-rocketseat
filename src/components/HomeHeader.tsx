import { Heading, HStack, Text, VStack, Icon } from "native-base";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  const urlImage =
    "https://static.wikia.nocookie.net/naruto-pedia/images/e/ea/Naruto.png/revision/latest?cb=20120407114822&path-prefix=pt-br";

  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        size={16}
        source={{
          uri: urlImage,
        }}
        alt="Imagem do usuário"
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading color="gray.100" fontSize="md">
          Pedro
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
