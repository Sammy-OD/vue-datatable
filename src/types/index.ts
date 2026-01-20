export interface DatatableProps {
  headings: Array<string>
  data: Array<Record<string, any>>
  verticalSpacing?: 'narrow' | 'standard' | 'wide'
  scrollable?: boolean
  pagination?: boolean
  paginationMode?: 'static' | 'server'
  loading: boolean
}