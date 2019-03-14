const isClient = () => !(typeof window !== 'undefined' && window.document);

export default isClient;
