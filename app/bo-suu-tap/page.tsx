import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CollectionsPage() {
  return (
    <>
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Bộ sưu tập</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Khám phá các bộ sưu tập cà vạt độc đáo của chúng tôi, được thiết kế cho từng mùa và phong cách
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured collection */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="aspect-[21/9] md:aspect-[3/1] relative">
              <Image
                src="/images/collections/summer-collection.jpg"
                alt="Bộ sưu tập Mùa Hè 2025"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="text-white p-8 md:p-16 max-w-2xl">
                  <Badge className="mb-4 bg-primary hover:bg-primary">Mới nhất</Badge>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">Bộ sưu tập Mùa Hè 2025</h2>
                  <p className="text-white/80 mb-6 text-lg">
                    Khám phá bộ sưu tập cà vạt mùa hè với các màu sắc tươi sáng và họa tiết độc đáo, mang đến vẻ ngoài
                    tươi mới và năng động cho quý ông hiện đại.
                  </p>
                  <Button size="lg" className="rounded-full">
                    Khám phá ngay
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collections grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              href={`/bo-suu-tap/${collection.slug}`}
              key={collection.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {collection.isNew && <Badge className="absolute top-4 right-4 bg-primary">Mới</Badge>}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                <p className="text-muted-foreground mb-4">{collection.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{collection.productCount} sản phẩm</span>
                  <Button variant="ghost" className="group-hover:translate-x-1 transition-transform">
                    Xem thêm <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Seasonal collections */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Bộ sưu tập theo mùa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-xl overflow-hidden group">
              <div className="aspect-square relative">
                <Image
                  src="/images/collections/spring-summer.jpg"
                  alt="Bộ sưu tập Xuân/Hè"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Bộ sưu tập Xuân/Hè</h3>
                    <p className="text-white/80 mb-4">Những mẫu cà vạt với màu sắc tươi sáng và họa tiết nhẹ nhàng</p>
                    <Button className="rounded-full">Khám phá</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden group">
              <div className="aspect-square relative">
                <Image
                  src="/images/collections/fall-winter.jpg"
                  alt="Bộ sưu tập Thu/Đông"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Bộ sưu tập Thu/Đông</h3>
                    <p className="text-white/80 mb-4">Những mẫu cà vạt với tông màu trầm ấm và chất liệu dày dặn</p>
                    <Button className="rounded-full">Khám phá</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special occasions */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Bộ sưu tập theo dịp</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {occasions.map((occasion, index) => (
              <Link
                href={`/bo-suu-tap/${occasion.slug}`}
                key={index}
                className="group relative rounded-xl overflow-hidden"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={occasion.image || "/placeholder.svg"}
                    alt={occasion.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{occasion.name}</h3>
                      <p className="text-white/80 text-sm">{occasion.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

// Sample data
const collections = [
  {
    id: 1,
    name: "Bộ sưu tập Mùa Hè 2025",
    slug: "mua-he-2025",
    description: "Những mẫu cà vạt với màu sắc tươi sáng và họa tiết độc đáo cho mùa hè",
    image: "/images/collections/summer-collection.jpg",
    productCount: 24,
    isNew: true,
  },
  {
    id: 2,
    name: "Bộ sưu tập Cổ điển",
    slug: "co-dien",
    description: "Những mẫu cà vạt với thiết kế cổ điển, vượt thời gian",
    image: "/images/collections/classic-collection.jpg",
    productCount: 18,
    isNew: false,
  },
  {
    id: 3,
    name: "Bộ sưu tập Hiện đại",
    slug: "hien-dai",
    description: "Những mẫu cà vạt với thiết kế hiện đại, phù hợp với xu hướng",
    image: "/images/collections/modern-collection.jpg",
    productCount: 15,
    isNew: false,
  },
  {
    id: 4,
    name: "Bộ sưu tập Họa tiết",
    slug: "hoa-tiet",
    description: "Những mẫu cà vạt với họa tiết độc đáo, tạo điểm nhấn cho trang phục",
    image: "/images/collections/pattern-collection.jpg",
    productCount: 20,
    isNew: true,
  },
  {
    id: 5,
    name: "Bộ sưu tập Lụa tơ tằm",
    slug: "lua-to-tam",
    description: "Những mẫu cà vạt được làm từ lụa tơ tằm cao cấp",
    image: "/images/collections/silk-collection.jpeg",
    productCount: 12,
    isNew: false,
  },
  {
    id: 6,
    name: "Bộ sưu tập Nơ cổ",
    slug: "no-co",
    description: "Những mẫu nơ cổ thanh lịch, phù hợp cho các sự kiện trang trọng",
    image: "/images/collections/bow-tie-collection.jpg",
    productCount: 8,
    isNew: false,
  },
]

const occasions = [
  {
    name: "Đám cưới",
    slug: "dam-cuoi",
    description: "Cà vạt cho ngày trọng đại",
    image: "/images/occasions/wedding.jpg",
  },
  {
    name: "Công sở",
    slug: "cong-so",
    description: "Cà vạt cho môi trường làm việc",
    image: "/images/occasions/office.jpg",
  },
  {
    name: "Tiệc tùng",
    slug: "tiec-tung",
    description: "Cà vạt cho các buổi tiệc",
    image: "/images/occasions/party.jpg",
  },
  {
    name: "Dịp đặc biệt",
    slug: "dip-dac-biet",
    description: "Cà vạt cho các dịp đặc biệt",
    image: "/images/occasions/special.jpg",
  },
]

