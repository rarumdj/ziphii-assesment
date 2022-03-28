import React, { Fragment } from "react";
import { Icon } from "@iconify/react";
import { Menu, Transition } from "@headlessui/react";
import { useActions } from "../../utils/redux/useAction";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const FilterRegion = () => {
  const { filterCountries } = useActions();

  const onRegionSelected = (region) => {
    filterCountries(region);
  };
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-between items-center w-56 rounded-md shadow-[0_0px_15px_-6px_rgba(0,0,0,0.2)] px-4 py-3.5 bg-secondary text-xs leading-none text-primary hover:bg-secondary">
            Filter by Region
            <Icon
              icon="eva:chevron-down-fill"
              fontSize={20}
              className="text-primary my-auto"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-secondary  focus:outline-none">
            <ul className="py-1">
              {Regions.map((region) => (
                <Menu.Item key={region.toLocaleLowerCase()}>
                  {({ active }) => (
                    <li
                      onClick={() => onRegionSelected(region)}
                      className={classNames(
                        active ? "bg-primary text-primary" : "text-primary",
                        "block px-4 py-2 text-sm cursor-pointer"
                      )}
                    >
                      {region}
                    </li>
                  )}
                </Menu.Item>
              ))}
            </ul>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default FilterRegion;
