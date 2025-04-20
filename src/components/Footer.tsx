const Footer = () => {
  return (
    <footer className="py-8 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Dileepa Bandara. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
