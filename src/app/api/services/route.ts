import { supabase } from '../../../../supabase';

export async function GET(req: Request) {

	const { searchParams } = new URL(req.url)
	const business_id = searchParams.get('business_id')
	
	const { data, error } = await supabase
		.from('business_services')
		.select('*')
		.eq('business_id', business_id);

	if (error) {
		console.error('Error fetching data:', error);
		return Response.error();
	}

	return Response.json(data);

}