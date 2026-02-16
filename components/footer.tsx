export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">About This Resource</h3>
            <p className="text-sm opacity-90">
              Comprehensive educational guide on insulin therapy evolution from animal insulin to modern recombinant DNA technology.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2 opacity-90">
              <li><a href="#overview" className="hover:opacity-100">Overview</a></li>
              <li><a href="#history" className="hover:opacity-100">History Timeline</a></li>
              <li><a href="#types" className="hover:opacity-100">Insulin Types</a></li>
              <li><a href="#mechanism" className="hover:opacity-100">Mechanism</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Clinical</h3>
            <ul className="text-sm space-y-2 opacity-90">
              <li><a href="#clinical" className="hover:opacity-100">Clinical Applications</a></li>
              <li><a href="#monitoring" className="hover:opacity-100">Monitoring Methods</a></li>
              <li><a href="#regimens" className="hover:opacity-100">Treatment Regimens</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Future</h3>
            <ul className="text-sm space-y-2 opacity-90">
              <li><a href="#future" className="hover:opacity-100">Emerging Technologies</a></li>
              <li><a href="#ai" className="hover:opacity-100">Artificial Intelligence</a></li>
              <li><a href="#gene-therapy" className="hover:opacity-100">Gene Therapy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm opacity-90">
            <div>
              <p><strong>Disclaimer:</strong> This educational resource is for informational purposes only. Always consult with qualified healthcare professionals for medical advice, diagnosis, or treatment.</p>
            </div>
            <div className="text-right">
              <p>© 2024 Insulin Therapy Evolution | Educational Resource</p>
              <p className="text-xs mt-1">Last updated: February 2026</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
