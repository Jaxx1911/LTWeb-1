import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Search, Heart, MenuIcon, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <header className="border-b bg-white sticky top-0 z-10 shadow-sm">
              <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-primary">
                  <span className="text-3xl">Cà Vạt VN</span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                  <Link href="/" className="font-medium hover:text-primary transition-colors">
                    Trang chủ
                  </Link>
                  <Link href="/san-pham" className="font-medium hover:text-primary transition-colors">
                    Sản phẩm
                  </Link>
                  <Link href="/bo-suu-tap" className="font-medium hover:text-primary transition-colors">
                    Bộ sưu tập
                  </Link>
                  <Link href="/ve-chung-toi" className="font-medium hover:text-primary transition-colors">
                    Về chúng tôi
                  </Link>
                  <Link href="/lien-he" className="font-medium hover:text-primary transition-colors">
                    Liên hệ
                  </Link>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="relative hidden md:block">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Tìm kiếm..." className="w-64 pl-8 rounded-full" />
                  </div>
                  <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Tài khoản</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Yêu thích</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-primary/10 relative">
                    <ShoppingCart className="h-5 w-5" />
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">2</Badge>
                    <span className="sr-only">Giỏ hàng</span>
                  </Button>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <MenuIcon className="h-5 w-5" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </div>
              </div>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="bg-primary text-primary-foreground">
              <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">CàVạtVN</h3>
                    <p className="text-primary-foreground/80">
                      Chuyên cung cấp các sản phẩm cà vạt cao cấp cho quý ông hiện đại.
                    </p>
                    <div className="flex space-x-4 mt-6">
                      <Button variant="secondary" size="icon" className="rounded-full h-10 w-10">
                        <span className="sr-only">Facebook</span>
                        <Image src="/images/icons/facebook.png" alt="Facebook" width={30} height={30} />
                      </Button>
                      <Button variant="secondary" size="icon" className="rounded-full h-10 w-10">
                        <span className="sr-only">Instagram</span>
                        <Image src="/images/icons/instagram.png" alt="Instagram" width={30} height={30} />
                      </Button>
                      <Button variant="secondary" size="icon" className="rounded-full h-10 w-10">
                        <span className="sr-only">Twitter</span>
                        <Image src="/images/icons/twitter.png" alt="Twitter" width={30} height={30} />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Liên kết</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/"
                          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                        >
                          Trang chủ
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/san-pham"
                          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                        >
                          Sản phẩm
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/bo-suu-tap"
                          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                        >
                          Bộ sưu tập
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/ve-chung-toi"
                          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                        >
                          Về chúng tôi
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/lien-he"
                          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                        >
                          Liên hệ
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Chính sách</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/chinh-sach-van-chuyen"
                          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                        >
                          Chính sách vận chuyển
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/chinh-sach-doi-tra"
                          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                        >
                          Chính sách đổi trả
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/chinh-sach-bao-mat"
                          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                        >
                          Chính sách bảo mật
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/dieu-khoan-dich-vu"
                          className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                        >
                          Điều khoản dịch vụ
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
                    <address className="not-italic text-primary-foreground/80">
                      <p>123 Đường Trần Phú, Hà Đông</p>
                      <p>Hà Nội, Việt Nam</p>
                      <p className="mt-2">Email: info@cavatvn.com</p>
                      <p>Điện thoại: 090 2262 132</p>
                    </address>
                    <div className="mt-4">
                      <Button variant="secondary" className="rounded-full">
                        Đăng ký nhận tin
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
                  <p className="text-primary-foreground/80">
                    © {new Date().getFullYear()} CàVạtVN. Tất cả các quyền được bảo lưu.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
