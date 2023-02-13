import * as React from 'react';

export function BaseComponent<T>(defaultProps: Partial<T>) {
    abstract class _BaseComponent<T> extends React.PureComponent<T> {

        static getDerivedStateFromError(error: Error) {
            // Update state so the next render will show the fallback UI.
            return { error };
        }

        public componentDidCatch(error: Error, _errorInfo: React.ErrorInfo) {
            // Log to console, or send to reporting service
            console.error(error);
        }

        public static defaultProps = defaultProps;

        abstract baseElement: React.FunctionComponent<this['props']>;

        // constructor(props: T) {
		// 	super(props);
		// }

        public render() {
            return React.createElement(this.baseElement);
        }
    }
    return _BaseComponent;
}
