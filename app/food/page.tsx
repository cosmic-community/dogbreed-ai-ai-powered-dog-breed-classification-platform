import { getDogFoodProducts } from '@/lib/cosmic'
import { DogFoodProduct } from '@/types'
import ProductCard from '@/components/ProductCard'

export default async function FoodPage() {
  const products = await getDogFoodProducts() as DogFoodProduct[]
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Dog Food</h1>
        <p className="text-xl text-gray-600 mb-12">
          Find premium dog food with comprehensive nutritional information.
        </p>
        
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No dog food products found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} type="food" />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}