'use client'

import { Upload } from 'lucide-react'
import { useState } from 'react'

export default function UploadButton() {
  const [isUploading, setIsUploading] = useState(false)
  
  const handleUpload = () => {
    // This would integrate with the AI model endpoint
    setIsUploading(true)
    setTimeout(() => {
      alert('Breed classification feature coming soon! This will integrate with the AI model endpoint.')
      setIsUploading(false)
    }, 1000)
  }
  
  return (
    <button
      onClick={handleUpload}
      disabled={isUploading}
      className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
    >
      <Upload size={20} />
      {isUploading ? 'Analyzing...' : 'Upload Photo to Identify Breed'}
    </button>
  )
}