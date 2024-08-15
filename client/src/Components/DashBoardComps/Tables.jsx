import React from "react";

const TablesProducts = () => {
  return (
    <div className="p-4 flex flex-col gap-4 ">
      <div className="border-2 border-[#223534] shadow-2xl text-[12px] rounded-lg sm:text-[18px] h-[400px] no-scl overflow-auto">
        <table className="w-full">
          <tr className="p-2 text-[#0CA3E7]">
            <th className="p-2 sticky top-0 bg-[#050618]">#</th>
            <th className="p-2 sticky top-0 bg-[#050618]">Product Name</th>
            <th className="p-2 sticky top-0 bg-[#050618]">Quantity</th>
            <th className="p-2 sticky top-0 bg-[#050618]">Exp. Date</th>
            <th className="p-2 sticky top-0 bg-[#050618]">Pricing</th>
          </tr>

          <tr className="">
            <td className="p-2 text-center">1</td>
            <td className="p-2 text-center">Samsung 55" 4K UHD TV</td>
            <td className="p-2 text-center">50</td>
            <td className="p-2 text-center">2027-12-31</td>
            <td className="p-2 text-center">$599.00</td>
          </tr>

          <tr className="">
            <td className="p-2 text-center">2</td>
            <td className="p-2 text-center">
              Lego Star Wars Millennium Falcon
            </td>
            <td className="p-2 text-center">200</td>
            <td className="p-2 text-center">N/A</td>
            <td className="p-2 text-center">$159.00</td>
          </tr>

          <tr className="">
            <td className="p-2 text-center">3</td>
            <td className="p-2 text-center">Acer Predator Gaming Laptop</td>
            <td className="p-2 text-center">60</td>
            <td className="p-2 text-center">2027-12-31</td>
            <td className="p-2 text-center">$1,499.00</td>
          </tr>

          <tr className="">
            <td className="p-2 text-center">4</td>
            <td className="p-2 text-center">Google Pixel 7</td>
            <td className="p-2 text-center">200</td>
            <td className="p-2 text-center">2025-12-31</td>
            <td className="p-2 text-center">$599.00</td>
          </tr>

          <tr className="">
            <td className="p-2 text-center">5</td>
            <td className="p-2 text-center">Charmin Ultra Soft Toilet Paper</td>
            <td className="p-2 text-center">500</td>
            <td className="p-2 text-center">2028-12-31</td>
            <td className="p-2 text-center">$19.99</td>
          </tr>

          <tr className="">
            <td className="p-2 text-center">6</td>
            <td className="p-2 text-center">
              Maybelline Super Stay Foundation
            </td>
            <td className="p-2 text-center">500</td>
            <td className="p-2 text-center">2025-12-31</td>
            <td className="p-2 text-center">$10.99</td>
          </tr>

          <tr className="">
            <td className="p-2 text-center">7</td>
            <td className="p-2 text-center">Instant Pot Duo 7-in-1</td>
            <td className="p-2 text-center">120</td>
            <td className="p-2 text-center">2026-12-31</td>
            <td className="p-2 text-center">$99.00</td>
          </tr>

          <tr className="">
            <td className="p-2 text-center">8</td>
            <td className="p-2 text-center">Apple iPhone 14</td>
            <td className="p-2 text-center">100</td>
            <td className="p-2 text-center">2025-12-31</td>
            <td className="p-2 text-center">$999.00</td>
          </tr>

          <tr className="">
            <td className="p-2 text-center">9</td>
            <td className="p-2 text-center">Nike Air Max 270</td>
            <td className="p-2 text-center">220</td>
            <td className="p-2 text-center">N/A</td>
            <td className="p-2 text-center">$150.00</td>
          </tr>

          <tr className="">
            <td className="p-2 text-center">10</td>
            <td className="p-2 text-center">Sony PlayStation 5</td>
            <td className="p-2 text-center">30</td>
            <td className="p-2 text-center">2027-12-31</td>
            <td className="p-2 text-center">$499.00</td>
          </tr>

          <tr className="">
            <td className="p-2 text-center">11</td>
            <td className="p-2 text-center">Samsung Galaxy S23</td>
            <td className="p-2 text-center">150</td>
            <td className="p-2 text-center">2025-12-31</td>
            <td className="p-2 text-center">$849.00</td>
          </tr>

          <tr className="">
            <td className="p-2 text-center">12</td>
            <td className="p-2 text-center">Dyson V15 Vacuum Cleaner</td>
            <td className="p-2 text-center">80</td>
            <td className="p-2 text-center">2026-12-31</td>
            <td className="p-2 text-center">$699.00</td>
          </tr>

          <tr className="">
            <td className="p-2 text-center">13</td>
            <td className="p-2 text-center">Great Value Organic Whole Milk</td>
            <td className="p-2 text-center">300</td>
            <td className="p-2 text-center">2024-09-01</td>
            <td className="p-2 text-center">$4.99</td>
          </tr>

          <tr className="">
            <td className="p-2 text-center">14</td>
            <td className="p-2 text-center">Sony Xperia 1 IV</td>
            <td className="p-2 text-center">120</td>
            <td className="p-2 text-center">2025-12-31</td>
            <td className="p-2 text-center">$949.00</td>
          </tr>

          <tr className="">
            <td className="p-2 text-center">15</td>
            <td className="p-2 text-center">OnePlus 11</td>
            <td className="p-2 text-center">180</td>
            <td className="p-2 text-center">2025-12-31</td>
            <td className="p-2 text-center">$729.00</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default TablesProducts;
