import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <div>
        <h1>What is Context API?</h1>
        <p>
          A React app may use the React Context API to generate global variables
          that can be passed around. This is an alternative to "prop drilling,"
          which entails passing props from grandma to kid to parent and so on.
          Context is also marketed as a simpler, lighter way to Redux state
          management. React.create All you need is Context(). It will provide
          you a customer and a supplier. Provider is a component that supplies
          the state to its children, as its name indicates. It will contain the
          "store" and serve as the parent of any components that may need it. A
          component that consumes and utilizes the state is known as a consumer.
        </p>
      </div>
      <div>
        <h1>What is semantic tag?</h1>
        <p>
          The need to communicate is the motivating force for producing semantic
          HTML. The insertion of semantic tags to a document enhances its
          communication. Semantic tags specifically inform the browser of a
          page's meaning and substance. Clear communication with search engines
          ensures delivery of the correct pages for the relevant searches.
          Semantic HTML tags give information about their contents beyond their
          visual appearance on a page. The browser recognizes text included in
          the code element as a coding language. Instead of rendering that code,
          the browser recognizes that you're using it to illustrate a point in
          an article or online lesson. Semantic tags also provide you extra
          style hooks. Today you may want your code samples shown in the normal
          browser style, but tomorrow you may want them highlighted with a gray
          backdrop, or you may want to specify the exact monogramed font family
          or font stack to use. All of this is simple using semantic markup and
          CSS.
        </p>
      </div>
      <div>
        <h1>Difference between block elements and inline elements</h1>
        <p>
          The inline and block components of HTML are one of the main places
          where web developers sometimes get confused because they are unable to
          distinguish between the two, causing clumsiness in a website if an
          element is assumed to be a block but is really an inline element.
          Block elements:They eat up every available breadth, no matter how much
          there is. They always have a top and bottom margin. It has no
          additional items close to it. Inline elements:Inline components take
          up just enough space to enable additional inline elements to be placed
          next to them. Inline elements do not have top and bottom margins like
          block elements.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
