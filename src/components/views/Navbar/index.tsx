import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Nabar(props: any) {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className={props.mobile}>
          {/* Female */}
          <NavigationMenuItem>
            <Link href="/female" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                Female
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Male */}
          <NavigationMenuItem>
            <Link href="/male" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                Male
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Kids */}
          <NavigationMenuItem>
            <Link href="/kids" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                Kids
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* All Products */}
          <NavigationMenuItem>
            <Link href="/all" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                All Products
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
