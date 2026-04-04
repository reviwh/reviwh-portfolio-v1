interface HCaptchaOptions {
  sitekey: string;
  size?: "compact" | "normal";
  theme?: "light" | "dark";
  callback?: (token: string) => void;
  "error-callback"?: () => void;
  "expired-callback"?: () => void;
}

declare global {
    interface Window {
        hcaptcha: {
            render: (container: HTMLElement, options: Record<string, HCaptchaOptions>) => number;
            reset: (widgetId?: number) => void;
            getResponse: (widgetId?: number) => string;
        };
    }
}

export { };