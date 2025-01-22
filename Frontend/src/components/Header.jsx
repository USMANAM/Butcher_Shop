const Header = () => {
  const listItems = [
    {
      id: 0,
      name: "Home",
    },
    {
      id: 1,
      name: "Products",
    },
    {
      id: 2,
      name: "Contact",
    },
  ];

  return (
    <header className="bg-red-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Butcher Shop</h1>
        <nav>
          <ul className="flex space-x-6">
            {listItems.map((item) => {
              return (
                <li key={item.id}>
                  <a href="#" className="hover:text-gray-300 transition">
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
