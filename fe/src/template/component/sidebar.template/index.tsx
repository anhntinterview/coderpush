import * as React from 'react';

interface IContentLeftTemplateProps {
    children: React.ReactNode;
}

const ContentLeftTemplate: React.FunctionComponent<IContentLeftTemplateProps> = (props) => {
    const { children } = props;
    return <div className="p-4 sm:ml-64">{children}</div>;
};

export default ContentLeftTemplate;
