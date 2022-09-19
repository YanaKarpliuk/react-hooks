import React from "react";
import "../css/useReducerHook.css";

export default function UseReducerHook() {
  return (
    <div>
      <h2 className="section-title">useReducer</h2>
      <div className="section-container">
        <div className="section-rules">
          <ul>
            <li>
              An alternative to <span className="code-naming">useState</span>
            </li>
            <li>
              <span className="code-naming">useReducer</span> is usually
              preferable to <span className="code-naming">useState</span> when
              you have complex state logic that involves multiple sub-values or
              when the next state depends on the previous one
            </li>
          </ul>
        </div>
        <div className="section-explanation">
          <p>Here is a simple counter app created with <span className="code-naming">useState</span>:</p>
          <p className="code-text reducer-code-text">
            <span className="code-text-violet">function</span> <span className="code-text-blue">Counter</span>() &#123; 
            <br/>&nbsp;&nbsp;<span className="code-text-violet">const</span> &#91;count, setCount&#93; = useState(0); 
            <br/>&nbsp;&nbsp;<span className="code-text-violet">return</span> (
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&#60;<span className="code-text-red">div</span>&#62;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Count: &#123;count&#125;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;<span className="code-text-red">button</span> <span className="code-text-violet">onClick</span>=&#123;() =&#62; <span className="code-text-blue">setCount </span>(<span className="code-text-red">prevCount</span> =&#62; <span className="code-text-red">prevCount</span> - 1)&#125;&#62;-&#60;/<span className="code-text-red">button</span>&#62;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;<span className="code-text-red">button</span> <span className="code-text-violet">onClick</span>=&#123;() =&#62; <span className="code-text-blue">setCount </span>(<span className="code-text-red">prevCount</span> =&#62; <span className="code-text-red">prevCount</span> + 1)&#125;&#62;+&#60;/<span className="code-text-red">button</span>&#62;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&#60;/<span className="code-text-red">div</span>&#62;
            <br/>&nbsp;&nbsp;);
            <br/>&#125;
          </p>
          <p>The same app rewritten with <span className="code-naming">useReducer</span>:</p>
          <p className="code-text reducer-code-text">
          <span className="code-text-violet">const</span> initialState = &#123;<span className="code-text-blue">count: 0</span>&#125;;
            <br/><span className="code-text-violet">function</span> <span className="code-text-blue">reducer</span>(state, action) &#123;
            <br/>&nbsp;&nbsp;<span className="code-text-violet">switch</span> (action.type) &#123;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-text-violet">case</span> <span className="code-text-green">'increment'</span>:
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-text-violet">return</span> &#123;<span className="code-text-blue">count</span>: state.count + 1&#125;;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-text-violet">case</span> <span className="code-text-green">'decrement'</span>:
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-text-violet">return</span> &#123;<span className="code-text-blue">count</span>: state.count - 1&#125;;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-text-violet">default</span>:
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-text-violet">throw new</span> <span className="code-text-yellow">Error</span>();
            <br/>&nbsp;&nbsp;&#125;
            <br/>&#125;
            <br/><span className="code-text-violet">function</span> <span className="code-text-blue">Counter</span>() &#123;
            <br/>&nbsp;&nbsp;<span className="code-text-violet">const</span> [state, dispatch] = <span className="code-text-blue">useReducer </span>(reducer, initialState);
            <br/>&nbsp;&nbsp;<span className="code-text-violet">return</span> (
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&#60;<span className="code-text-red">div</span>&#62;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Count: &#123;state.count&#125;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;<span className="code-text-red">button</span> <span className="code-text-violet">onClick</span>=&#123;() =&#62; <span className="code-text-blue">dispatch</span>(&#123;<span className="code-text-blue">type</span>: <span className="code-text-green">'decrement'</span>&#125;)&#125;&#62;-&#60;/<span className="code-text-red">button</span>&#62;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;<span className="code-text-red">button</span> <span className="code-text-violet">onClick</span>=&#123;() =&#62; <span className="code-text-blue">dispatch</span>(&#123;<span className="code-text-blue">type</span>: <span className="code-text-green">'increment'</span>&#125;)&#125;&#62;+&#60;/<span className="code-text-red">button</span>&#62;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&#60;/<span className="code-text-red">div</span>&#62;
            <br/>&nbsp;&nbsp;);
            <br/>&#125;
          </p>
        </div>
      </div>
    </div>
  );
}
