import Image from "next/image"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  return (
    <>
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Liên hệ</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi hoặc
            yêu cầu nào.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-none shadow-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Điện thoại</h3>
              <p className="text-muted-foreground mb-4">Chúng tôi luôn sẵn sàng hỗ trợ bạn qua điện thoại</p>
              <a href="tel:02812345678" className="text-primary font-medium">
                028 1234 5678
              </a>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">
                Gửi email cho chúng tôi và chúng tôi sẽ phản hồi trong thời gian sớm nhất
              </p>
              <a href="mailto:info@cavatvn.com" className="text-primary font-medium">
                info@cavatvn.com
              </a>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Địa chỉ</h3>
              <p className="text-muted-foreground mb-4">
                Ghé thăm cửa hàng của chúng tôi để trải nghiệm sản phẩm trực tiếp
              </p>
              <address className="not-italic text-primary font-medium">123 Đường Lê Lợi, Quận 1, TP. HCM</address>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">Gửi tin nhắn cho chúng tôi</h2>
            <p className="text-muted-foreground mb-6">
              Điền thông tin của bạn vào mẫu dưới đây và chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    Họ
                  </label>
                  <Input id="first-name" placeholder="Nguyễn" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Tên
                  </label>
                  <Input id="last-name" placeholder="Văn A" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="example@email.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Số điện thoại
                </label>
                <Input id="phone" placeholder="0912 345 678" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Chủ đề
                </label>
                <Select>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Chọn chủ đề" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">Thông tin chung</SelectItem>
                    <SelectItem value="product">Thông tin sản phẩm</SelectItem>
                    <SelectItem value="order">Đơn hàng</SelectItem>
                    <SelectItem value="return">Đổi trả</SelectItem>
                    <SelectItem value="other">Khác</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Tin nhắn
                </label>
                <Textarea id="message" placeholder="Nhập tin nhắn của bạn..." rows={5} />
              </div>

              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" /> Gửi tin nhắn
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Thông tin cửa hàng</h2>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-6">
              <div className="aspect-video relative">
                <Image src="/images/store-map.jpg" alt="Bản đồ cửa hàng" fill className="object-cover" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Địa chỉ</h3>
                  <p className="text-muted-foreground">
                    123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Giờ mở cửa</h3>
                  <div className="text-muted-foreground">
                    <p>Thứ Hai - Thứ Sáu: 8:00 - 20:00</p>
                    <p>Thứ Bảy - Chủ Nhật: 9:00 - 21:00</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Điện thoại</h3>
                  <p className="text-muted-foreground">028 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">info@cavatvn.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Kết nối với chúng tôi</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                  <span className="sr-only">Facebook</span>
                  <Image src="/images/icons/facebook.png" alt="Facebook" width={20} height={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                  <span className="sr-only">Instagram</span>
                  <Image src="/images/icons/instagram.png" alt="Instagram" width={20} height={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                  <span className="sr-only">Twitter</span>
                  <Image src="/images/icons/twitter.png" alt="Twitter" width={20} height={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                  <span className="sr-only">YouTube</span>
                  <Image src="/images/icons/youtube.png" alt="YouTube" width={20} height={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

