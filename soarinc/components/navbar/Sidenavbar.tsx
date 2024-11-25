import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { NavData } from "../data"; 
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Sidenavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false); 

  return (
    <header className="flex lg:hidden h-20 w-full shrink-0 items-center md:px-6 z-[101]">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden border-0">
            <MenuIcon />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
              <SheetContent side="left">
                  <div className="flex align-center gap-2">
                  <Link href="/" className='flex items-center gap-2'>
                    <Image src="/assets/images/logo.svg" alt="logo" width={24} height={24} />
                    <h1 className='text-lg font-semibold'>Soar Task</h1>
                  </Link>
              </div>
          <div className="grid gap-2 py-6">
            {NavData.map((item, index) => (
              <NavLink
                key={index}
                name={item.name}
                href={item.href}
                icon={item.icon}
                active={item.active}
                closeSheet={closeSheet} 
              />
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function MenuIcon() {
  return (
      <Image
          priority
      src="/assets/images/ham.svg"
      alt="Menu Icon"
      width={14}
      height={18}
      className="lg:hidden"
    />
  );
}

interface NavLinkProps {
  name: string;
  href: string;
  icon: string;
  active: string;
  closeSheet: () => void; 
}

function NavLink({ name, href, icon, active, closeSheet }: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (e: React.MouseEvent) => {
    e.preventDefault(); 
    closeSheet(); 
    router.push(href);
  };

  const getLinkClasses = (route: string) => {
    return pathname === route
      ? "text-medium lg:text-lg font-medium text-primary"
      : "text-medium lg:text-lg font-medium text-muted";
  };

  return (
    <Link href={href} passHref>
      <div
        className="flex items-center gap-4 px-4 py-3 hover:bg-card cursor-pointer"
        onClick={handleNavigation}
      >
        <Image
          priority
          src={pathname === href ? active : icon}
          alt={`${name} Icon`}
          width={14}
          height={14}
        />
        <p className={getLinkClasses(href)}>{name}</p>
      </div>
    </Link>
  );
}
