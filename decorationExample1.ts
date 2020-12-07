import { onUpdatedAST } from "./extension";
import { AST_NODE_TYPES } from "@typescript-eslint/typescript-estree";

onUpdatedAST(({ setDecoration, traverse }) => {
    traverse(
        {
            enter: node => {
                if (node.type === AST_NODE_TYPES.AwaitExpression) {
                    setDecoration({ node, backgroundColor: "blue" });
                }
            }
        }
    );
});