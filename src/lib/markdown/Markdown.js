// 게시물 본문 - 마크다운으로
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Markdown = ({text}) => {
	return (
    	<ReactMarkdown remarkPlugins={[remarkGfm]}>
        	{text}
      	</ReactMarkdown>
    )
}

export default Markdown;