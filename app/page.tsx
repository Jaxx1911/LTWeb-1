import Image from "next/image"
import { ShoppingCart, Search, Heart, MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5 relative overflow-hidden z-0">
        <div className="absolute inset-0 opacity-5 bg-[url('/placeholder.svg?height=800&width=800')] bg-repeat"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-4 px-4 py-1 text-sm bg-primary/20 text-primary hover:bg-primary/20 transition-colors">
            Bộ sưu tập mới 2025
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary relative">
            <span className="relative z-10">Cà vạt cao cấp cho quý ông hiện đại</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Bộ sưu tập cà vạt đa dạng với chất liệu lụa tơ tằm cao cấp, thiết kế tinh tế và màu sắc phong phú
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-lg px-8 rounded-full">
              Mua ngay
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 rounded-full">
              Xem bộ sưu tập
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Sản phẩm nổi bật</h2>
          <Button variant="ghost" className="text-primary">
            Xem tất cả
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square relative overflow-hidden bg-muted">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/80 hover:bg-white">
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Yêu thích</span>
                  </Button>
                </div>
                {product.isNew && <Badge className="absolute top-2 left-2 bg-primary">Mới</Badge>}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">{product.price.toLocaleString("vi-VN")}₫</span>
                  <Button size="sm" className="rounded-full">
                    Thêm vào giỏ
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="bg-primary/5 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <Badge className="mb-4 w-fit px-4 py-1 text-sm bg-primary/20 text-primary hover:bg-primary/20">
                Ưu đãi đặc biệt
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Bộ sưu tập mùa hè 2025</h2>
              <p className="mb-6 text-muted-foreground">
                Khám phá bộ sưu tập cà vạt mùa hè với các màu sắc tươi sáng và họa tiết độc đáo. Giảm giá 20% cho tất cả
                sản phẩm trong bộ sưu tập từ ngày 01/04 đến 30/04.
              </p>
              <Button className="w-fit rounded-full">Xem ngay</Button>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image src="/images/summer-banner.JPG" alt="Bộ sưu tập mùa hè" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Tại sao chọn chúng tôi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary/5 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image src="/images/icons/quality.png" alt="Chất lượng" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Chất lượng cao cấp</h3>
              <p className="text-muted-foreground">
                Sản phẩm được làm từ lụa tơ tằm 100% tự nhiên, mềm mại và bền đẹp theo thời gian.
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image src="/images/icons/design.png" alt="Thiết kế" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Thiết kế độc đáo</h3>
              <p className="text-muted-foreground">
                Mỗi mẫu cà vạt đều được thiết kế riêng biệt, thể hiện phong cách và cá tính của người đàn ông hiện đại.
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image src="/images/icons/service.png" alt="Dịch vụ" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Dịch vụ tận tâm</h3>
              <p className="text-muted-foreground">
                Đội ngũ tư vấn chuyên nghiệp, giao hàng nhanh chóng và chính sách đổi trả linh hoạt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Khách hàng nói gì về chúng tôi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

// Sample product data
const products = [
  {
    id: 1,
    name: "Cà vạt lụa đen cổ điển",
    description: "Cà vạt lụa màu đen thanh lịch, phù hợp với mọi trang phục",
    price: 850000,
    image: "/images/products/tie-black.jpg",
    isNew: true,
  },
  {
    id: 2,
    name: "Cà vạt sọc xanh navy",
    description: "Cà vạt sọc xanh navy sang trọng, thích hợp cho các buổi họp",
    price: 750000,
    image: "/images/products/tie-navy.jpg",
    isNew: false,
  },
  {
    id: 3,
    name: "Cà vạt lụa họa tiết",
    description: "Cà vạt lụa với họa tiết tinh tế, tạo điểm nhấn cho trang phục",
    price: 950000,
    image: "/images/products/tie-pattern.jpeg",
    isNew: true,
  },
  {
    id: 4,
    name: "Cà vạt lụa đỏ đô",
    description: "Cà vạt lụa màu đỏ đô sang trọng, thể hiện sự tự tin",
    price: 780000,
    image: "/images/products/tie-red.jpg",
    isNew: false,
  },
]

// Sample features data
const features = [
  {
    title: "Miễn phí vận chuyển",
    description: "Cho đơn hàng từ 500.000₫",
    icon: ShoppingCart,
  },
  {
    title: "Đổi trả 30 ngày",
    description: "Dễ dàng và nhanh chóng",
    icon: Heart,
  },
  {
    title: "Thanh toán an toàn",
    description: "Nhiều phương thức thanh toán",
    icon: Search,
  },
  {
    title: "Hỗ trợ 24/7",
    description: "Luôn sẵn sàng hỗ trợ bạn",
    icon: MenuIcon,
  },
]

// Sample testimonials data
const testimonials = [
  {
    name: "Nguyễn Văn A",
    title: "Giám đốc điều hành",
    avatar: "/images/testimonials/customer1.jpg",
    quote:
      "Tôi rất hài lòng với chất lượng cà vạt từ CàVạtVN. Chất liệu lụa mềm mại và thiết kế tinh tế giúp tôi tự tin hơn trong các cuộc họp quan trọng.",
  },
  {
    name: "Trần Văn B",
    title: "Luật sư",
    avatar: "/images/testimonials/customer2.jpg",
    quote:
      "Đã mua nhiều cà vạt từ nhiều thương hiệu khác nhau, nhưng CàVạtVN luôn là lựa chọn hàng đầu của tôi vì chất lượng và dịch vụ tuyệt vời.",
  },
  {
    name: "Lê Văn C",
    title: "Doanh nhân",
    avatar: "/images/testimonials/customer3.jpg",
    quote:
      "Cà vạt từ CàVạtVN luôn nhận được nhiều lời khen ngợi từ đồng nghiệp. Tôi đặc biệt yêu thích bộ sưu tập họa tiết độc đáo của họ.",
  },
]

