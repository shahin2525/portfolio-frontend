// TypeScriptIcon.tsx
export default function TypeScriptIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      {...props}
    >
      <rect width="256" height="256" rx="60" fill="#3178C6" />
      <path
        fill="#fff"
        d="M142.6 150.8h22.4v48.6c0 11.2 0 11.3-2.6 12.4-4.4 1.8-8 .2-12.4-6.4-3.3-5.1-5.6-6.8-10.3-7.2-4.1-.4-7.8 1.3-9.9 4.7-1.6 2.4-1.6 2.5.1 5.3 3.7 5.8 10.6 11.7 16.8 14 6.5 2.4 17.7 2.1 23.8-.6 6.5-2.9 12.4-9.9 13.9-16.1.7-2.8.9-13.3.8-37.8l-.1-33.6h-42.5v16.7zm-66.6.1v8.2h22.4v65.3h19.1v-65.3H140v-8.2c0-4.5-.2-8.3-.4-8.4-.2 0-17.4-.1-38.3-.1l-38 .1v8.2z"
      />
    </svg>
  );
}
