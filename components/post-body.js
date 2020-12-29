import dynamic from "next/dynamic";

import markdownStyles from "./markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";

const StowDemo = dynamic(() => import("./CustomComponents/StowDemo"));

const sanityComponentNames = ["stow-demo"];

const serializers = {
  types: {
    code: (props) => {
      return (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      );
    },
    component: (props) => {
      const isInvalid = !sanityComponentNames.includes(props.node.component);
      if (isInvalid) throw new Error("Invalid component name");
      if (props.node.component === "stow-demo") {
        return <StowDemo />;
      }
      return <p>Component here</p>;
    },
  },
};

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <BlockContent
        blocks={content}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        className={markdownStyles.markdown}
        serializers={serializers}
      />
    </div>
  );
}
