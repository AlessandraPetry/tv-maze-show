export default function Footer() {
  return (
    <footer className="bg-black text-white p-4 text-center">
      <p className="noto-sans-font-bold">
        &copy; {new Date().getFullYear()} Alessandra Petry. All rights reserved.
      </p>
    </footer>
  );
}
