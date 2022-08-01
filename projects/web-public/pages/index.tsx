import { Text } from "@gus/design-system/components/Text";
import { sum } from "@gus/utils/math/sum";

export default function HomeScreen() {
  return (
    <main>
      <Text tag="h1">Home do Projeto</Text>
      <p>
        Importing my local module: @gus/utils/math/sum sum(2,2): {sum(2, 2)}
      </p>
    </main>
  );
}
