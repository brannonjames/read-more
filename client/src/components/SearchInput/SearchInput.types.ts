export interface SearchInputProps {
  onSearchFieldChange: (value: string) => void
  searchValue: string
  onFocus: () => void
  isDisabled: boolean
}