import React from 'react';
import './PostItem.css'; 
import {marked} from 'marked';
function PostItem({ title, summary, imageUrl })
{
  console.log(imageUrl)
  const getMarkdownText = (markdown) =>
  {
    if (!markdown)
    {
      return { __html: '' }; // Return an empty string or some default value
    }
    var rawMarkup = marked(markdown, { sanitize: true });
    return { __html: rawMarkup };
  };

  return (
    <div className="post-item">
      <h2>{title}</h2>
      {imageUrl && <img src={imageUrl} alt={title} />}

      {/* Use only if you trust the source of the Markdown content */}
      <p dangerouslySetInnerHTML={getMarkdownText(summary)}></p>
    </div>
  );
}

export default PostItem;
