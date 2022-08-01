import {sum} from "@gus/utils/math/sum"

export default function HomeScreen() {
    return (
        <div>
            <h1>Home do Projeto</h1>
            <p>Importing my local module: @gus/utils/math/sum sum(2,2): {sum(2,2)}</p>
        </div>
    );
}