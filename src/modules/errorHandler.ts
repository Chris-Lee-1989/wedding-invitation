
export const errorHandler =  async (params: ParamsType) => {
    if (params.status === 500 && params.error) console.error(params.error);
    return Response.json(params.data, {status: params.status});
}

export default errorHandler; 