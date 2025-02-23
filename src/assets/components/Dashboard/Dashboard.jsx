import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  ShoppingCart,
  BarChart,
  Settings,
  Bell,
  Search,
  Contact,
} from "lucide-react";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("Integrations");
  const tabs = [
    "Profile",
    "Password",
    "Team",
    "Notification",
    "Integrations",
    "Licenses",
  ];

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <section className=" h-screen flex fixed">
          <aside className=" w-64 bg-gray-900 text-white p-4 flex flex-col justify-between">
            <div>
              <h1 className="text-xl font-bold mb-6">ServiceSpire</h1>
              <nav>
                <ul>
                  <li>
                    <NavLink
                      to={"/dashboard"}
                      className={({
                        isActive,
                      }) => `mb-4 flex items-center gap-2  p-3 rounded 
              ${isActive ? "bg-indigo-600" : "text-black"}`}
                    >
                      <Home size={20} />
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      // to={"/about"}
                      className={({
                        isActive,
                      }) => `mb-4 flex items-center gap-2  p-3 rounded 
              ${isActive ? "bg-indigo-600" : "text-white"}`}
                    >
                      <Contact size={20} />
                      Contact Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/contact"}
                      className={({
                        isActive,
                      }) => `mb-4 flex items-center gap-2  p-3 rounded 
              ${isActive ? "bg-indigo-600" : "text-black"}`}
                    >
                      dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/services"}
                      className={({
                        isActive,
                      }) => `mb-4 flex items-center gap-2  p-3 rounded 
              ${isActive ? "bg-indigo-600" : "text-black"}`}
                    >
                      dashboard
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-2 p-2">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="rounded-full w-10 h-10"
              />
              <span>Mariana Jones</span>
            </div>
          </aside>
        </section>

        <section className="ml-64">
          <main className=" bg-gray-100 w-7xl p-5 fixed">
            <header className="flex justify-between items-center mb-6 ">
              <h2 className="text-2xl font-semibold">Settings</h2>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search here"
                    className="p-2 rounded border"
                  />
                  <Search className="absolute right-2 top-2 text-gray-400" />
                </div>
                <Bell className="text-gray-600" size={24} />
              </div>
            </header>

            {/* Tabs */}
            <div className="flex gap-6 ">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`pb-2 ${
                    activeTab === tab
                      ? "border-b-2 border-indigo-600 text-indigo-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            
          </main>

          <section className="mt-35 p-5 bg-gray-100">
          {/* Content */}
            <div className=" bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between bg-indigo-100 p-4 rounded-md">
            <div>
              <h3 className="text-lg font-semibold">Learn how to connect new apps with Rareblocks API</h3>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-600">Dismiss</button>
              <button className="bg-indigo-600 text-white p-2 px-4 rounded-md">View Tutorial</button>
            </div>
          </div>
        </div>
        </section>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore hic dicta corporis sit molestiae repudiandae culpa rerum porro ratione eaque, adipisci quaerat id ipsam dolores sequi. Commodi, reprehenderit vero.
        Magnam rerum rem tenetur, in odit voluptatum iusto officiis minima at, labore iure nesciunt? Perferendis nulla animi minus sequi ad, neque facere, aliquam est, distinctio amet sed nisi voluptas reiciendis.
        Assumenda, dolores animi, ab est ratione, nesciunt distinctio rem ipsum incidunt unde temporibus id. Exercitationem odio soluta, tempora dolorum dolore sint similique quo veritatis, illum quia ipsa deleniti dicta quis.
        Soluta eaque corporis, accusamus quis neque inventore consequatur sint dolor ut libero est, minus labore ratione suscipit doloribus quibusdam delectus aperiam atque aut in laboriosam. Id tenetur cupiditate quos in.
        Sapiente exercitationem praesentium, molestias illum dolore quam velit ab adipisci, enim dolor odio quas laboriosam minima voluptatum labore vitae eveniet itaque totam repellendus vero, porro saepe nulla! Eligendi, recusandae nisi?
        Autem et quae sapiente porro nam temporibus reiciendis enim maxime numquam magni, error accusamus ipsam ab! Dolorum suscipit, in itaque, obcaecati ea nemo libero sit id aliquam fuga ducimus optio?
        Repudiandae ut consequatur recusandae placeat. Odio optio atque dicta voluptates, architecto quae et repellat explicabo ipsum ullam, fuga itaque labore neque alias iusto. Asperiores, saepe corporis odio quaerat optio mollitia.
        Provident id quo est voluptatem qui inventore distinctio sint, recusandae similique, culpa soluta consequuntur, placeat illum! Perspiciatis omnis ab consectetur blanditiis fuga totam tenetur quibusdam. Consequatur corporis ipsum et voluptatem?
        Consequuntur ex doloribus aperiam delectus asperiores! Perspiciatis amet cupiditate fugiat hic eaque sit, consequatur in? Consectetur, quidem non? Asperiores odit odio, tenetur eum sint atque corrupti nobis delectus magni animi.
        Cupiditate inventore repudiandae soluta nihil quam tempora voluptas? Harum dolorum reprehenderit magnam voluptas. Quas nemo iste, quod esse maiores sapiente optio fugit ut eaque quos nisi id, numquam unde quidem?
        Maiores nemo vitae nostrum earum quos voluptatem accusamus quisquam obcaecati voluptate. Minima pariatur harum culpa, necessitatibus nulla consequatur! Omnis quaerat rem consequuntur nobis deserunt, ipsa officiis praesentium quidem et quos.
        Iusto, accusamus aperiam. Blanditiis eveniet earum velit nesciunt quae laudantium est impedit, vel quasi, eos iste omnis accusamus assumenda dolores cum! Nesciunt distinctio quasi molestiae molestias dignissimos sit minus recusandae.
        Voluptatum eaque mollitia eligendi, nam fuga ex dolore nulla voluptates minima deserunt, aliquid officia itaque nesciunt tenetur beatae sequi eum. Tenetur, natus. Fuga, nisi? Similique ullam ad facere optio doloremque.
        Ipsa, ab fuga dolores quaerat autem, animi nesciunt placeat dicta voluptatem a tenetur est consectetur debitis alias deserunt sapiente perferendis doloremque beatae labore! Eaque natus voluptatem dolores saepe consequuntur! Aliquid.
        Eum harum, praesentium beatae tenetur adipisci nesciunt fugit sunt minima doloribus consequuntur. Adipisci blanditiis sint, quam autem mollitia alias repellendus pariatur vel nisi ea. Nulla quaerat reiciendis commodi dignissimos a.
        Neque eum ut fugiat, ratione in cupiditate magnam quidem impedit ipsum adipisci optio dolor omnis. Et, ad dolorem nam fuga accusamus eum similique illo tempore officiis esse sint! Qui, aliquam!
        Mollitia facere quisquam harum ut rem officiis, deserunt illum provident aliquid quas laborum sequi facilis repellendus, ducimus minus doloremque accusamus eligendi voluptatibus porro nobis et eaque? Libero, molestiae aperiam. Voluptas.
        Unde quisquam, nisi, iste, dolorem quod aliquam error nihil illo quaerat quibusdam reiciendis! Atque ut, quia consequuntur sint veritatis amet odit eius dolor laborum reiciendis, eos recusandae rerum, est repellat.
        Tempora laborum quisquam ratione accusamus cumque odio saepe, voluptatem earum soluta cupiditate nobis molestiae corporis vitae distinctio vero ducimus ad labore maxime iusto rem deleniti omnis hic, expedita possimus? Nisi!
        Perspiciatis excepturi doloribus voluptate odio fugiat non error nulla cum. Soluta, nulla eveniet impedit sint quasi voluptas. Perspiciatis tempore numquam rerum. Praesentium adipisci earum repellat consequatur quibusdam, quod maiores tempore.
        Dolores officia autem atque pariatur, voluptate sed magnam voluptatum dicta, vero porro asperiores non eos? Obcaecati, labore cupiditate quos sapiente eveniet tempore ratione! Necessitatibus temporibus asperiores consectetur quam adipisci praesentium.
        Quaerat saepe consequuntur atque sit illum obcaecati unde officiis, excepturi quis dolorum architecto error exercitationem fugit sed omnis nobis, optio quod maiores aspernatur molestias at. Consectetur id officia neque accusantium.
        Dolorum expedita suscipit provident, consectetur culpa neque modi sit, ab dolores tenetur adipisci unde aut asperiores debitis, rem numquam ipsum? Esse saepe quidem ut, eius unde similique iusto ducimus ad.
        Dolor sequi ducimus sint, alias illo veritatis molestiae odio. Voluptates adipisci aperiam nulla, quod, tenetur rerum recusandae vitae eveniet quasi exercitationem soluta possimus eos aut excepturi. Repellat perferendis nobis impedit.
        Excepturi animi corporis provident, deleniti recusandae deserunt ullam ducimus culpa ratione neque quaerat quae, fugit cumque nihil error voluptate quia alias. Placeat odit ab laboriosam sunt iure distinctio aperiam magni?
        Minus suscipit accusantium omnis odio soluta quae laborum quam a esse itaque molestias necessitatibus iure placeat rerum, quis possimus nostrum reiciendis explicabo fugiat pariatur. Commodi vel ducimus quos iusto ratione.
        At, qui deleniti repellendus dicta aspernatur suscipit fugiat incidunt inventore deserunt. Omnis, mollitia esse expedita excepturi cupiditate exercitationem quam similique, suscipit architecto odio, autem recusandae. Autem voluptate consequatur rerum sequi.
        Enim, aliquid veniam debitis veritatis excepturi fuga corrupti eius deserunt culpa quidem alias qui aperiam? Fuga voluptas ut quis dicta obcaecati? Neque eum iusto id, quasi possimus culpa reprehenderit veniam.
        Labore fugiat eius in culpa hic sed rem necessitatibus deleniti quaerat doloribus enim placeat aliquam commodi, magnam quam totam numquam doloremque. Sapiente quod nostrum tempore fugit, doloribus vel odio quisquam.
        Itaque perferendis voluptatum tempora eaque voluptatibus inventore similique, commodi dolorum mollitia nemo non ipsam omnis. Exercitationem aperiam officiis vel nemo veritatis tempore esse est consectetur cum? Sunt, inventore illo? Harum.
        </section>
        
        
      </div>
    </>
  );
}

export default Dashboard;
