import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaRegCircle } from 'react-icons/fa'
import { BiHomeAlt, BiNews } from 'react-icons/bi'
import { NavLink } from './NavLink'

export default function MobileMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="rounded-full px-2 py-2  text-3xl font-bold text-black outline-none ring-zinc-300 transition-all duration-300 hover:scale-105 hover:ring-4 active:scale-95 dark:text-white dark:ring-zinc-700">
          {({ open }: { open: boolean }) =>
            !open ? <FaRegCircle /> : <CgClose />
          }
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
        <Menu.Items className="absolute right-0 mt-2 w-72 origin-top-right divide-y divide-zinc-100 rounded-2xl bg-white py-2 px-2 shadow-xl ring-2 ring-zinc-200 ring-opacity-5 focus:outline-none dark:bg-black dark:ring-zinc-900">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }: { active: boolean }) => (
                <NavLink
                  icon={<BiHomeAlt />}
                  href="/"
                  text="Home"
                  active={active}
                />
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }: { active: boolean }) => (
                <NavLink
                  icon={<BiNews />}
                  href="/blog"
                  text="Blog"
                  active={active}
                />
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
