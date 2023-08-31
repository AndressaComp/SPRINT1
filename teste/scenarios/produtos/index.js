import GetProduto from "./GetProduto.js";
import { group, sleep } from "k6";

export default () => {
    group('Endpoint k6 - Get', () => {{
        GetProduto();
    }});
    sleep(1);
}