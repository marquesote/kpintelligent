/* The data controller shown in the privacy policy (/privacidad). The owner fills these in; while any is pending the
   page shows a draft notice and is kept out of search engines. The text must be reviewed by a legal adviser. */
export const LEGAL = {
  responsable: 'KpIntelligent Business, S.L.',
  nif: 'B40247489',
  domicilio: 'Calle Guía, 1B, Pozuelo de Alarcón (Madrid)',
  email: 'marques@kpintelligent.es',
  /** how long a request is kept when the person does not become a client (a proposal, to confirm) */
  conservacion: '12 meses desde el último contacto',
  actualizado: '25 de noviembre de 2026',
}

export const LEGAL_PENDIENTE = Object.values(LEGAL).some((value) => value.startsWith('[Pendiente'))

export const PRIVACY_PATH = '/privacidad'
