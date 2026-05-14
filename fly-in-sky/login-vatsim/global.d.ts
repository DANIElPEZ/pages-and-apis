export {};

declare global {
  interface Window {
    FlutterControl?: {
      postMessage: (message: string) => void;
    };
  }
}
