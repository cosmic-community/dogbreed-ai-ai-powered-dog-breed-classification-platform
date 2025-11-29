import { MarketplaceItem, DogFoodProduct } from '@/types'

interface ProductCardProps {
  product: MarketplaceItem | DogFoodProduct
  type: 'marketplace' | 'food'
}

export default function ProductCard({ product, type }: ProductCardProps) {
  const isMarketplace = type === 'marketplace'
  const metadata = product.metadata as any
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {metadata.product_image && (
        <div className="relative h-48">
          <img 
            src={`${metadata.product_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={isMarketplace ? metadata.item_name : metadata.product_name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          {isMarketplace ? metadata.item_name : metadata.product_name}
        </h3>
        
        {metadata.brand && (
          <p className="text-sm text-gray-600 mb-2">by {metadata.brand}</p>
        )}
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-blue-600">
            ${metadata.price.toFixed(2)}
          </span>
          
          {metadata.category && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {metadata.category.value}
            </span>
          )}
        </div>
        
        {metadata.description && (
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {metadata.description}
          </p>
        )}
        
        {isMarketplace && metadata.in_stock !== undefined && (
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${metadata.in_stock ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-sm text-gray-600">
              {metadata.in_stock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        )}
        
        {!isMarketplace && metadata.weight && (
          <p className="text-sm text-gray-600">Weight: {metadata.weight}</p>
        )}
      </div>
    </div>
  )
}