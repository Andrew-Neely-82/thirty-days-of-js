import { Copy, Check } from "./icons";
import { useState } from "react";

const CopyCodeBox = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <span className="codeblock">
      <pre className="pre">
        <code>
          <span>{code}</span>
          <button onClick={copyCode}>{copied ? <Check className="checked" /> : <Copy />}</button>
        </code>
      </pre>
    </span>
  );
};

export default CopyCodeBox;
