export const successHandler =  async (params: ParamsType) => {
    return Response.json(params.data);
}

export default successHandler;