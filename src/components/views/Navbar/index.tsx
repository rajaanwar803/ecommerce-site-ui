"use client"
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

export default function Nabar(props:any) {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className={props.mobile}>
          <NavigationMenuItem>
            <Link href="/female" legacyBehavior passHref>
              <NavigationMenuLink className= {`text-base ${navigationMenuTriggerStyle()}`}>
                Female
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/female" legacyBehavior passHref>
              <NavigationMenuLink className={`text-base ${navigationMenuTriggerStyle()}`}>
                Male
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/male" legacyBehavior passHref>
              <NavigationMenuLink className={`text-base ${navigationMenuTriggerStyle()}`}>
                Kids
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/all" legacyBehavior passHref>
              <NavigationMenuLink className={`text-base ${navigationMenuTriggerStyle()}`}>
                All Products
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
