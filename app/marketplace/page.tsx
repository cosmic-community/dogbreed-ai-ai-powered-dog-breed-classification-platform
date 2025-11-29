import { getMarketplaceItems } from '@/lib/cosmic'
import { MarketplaceItem } from '@/types'
import ProductCard from '@/components/ProductCard'

export default async function MarketplacePage() {
  const items = await getMarketplaceItems() as MarketplaceItem[]
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Marketplace</h1>
        <p className="text-xl text-gray-600 mb-12">
          Browse our curated selection of dog products, toys, and accessories.
        </p>
        
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No marketplace items found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <ProductCard key={item.id} product={item} type="marketplace" />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}