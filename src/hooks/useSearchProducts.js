import { useSearchParams} from 'react-router-dom';

export default function useSearchProducts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';

  return [query, setSearchParams];
}