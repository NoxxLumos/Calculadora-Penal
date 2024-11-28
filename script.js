const crimesPorCategoria = {
    "CRIMES_CONTRA_A_VIDA": {
        1: { artigo: "Art. 10", crime: "Homicídio Doloso", ato: "Matar alguém com intenção", multa: 60000, pena_meses: 60, fianca: 0 },
        2: { artigo: "Art. 10.1", crime: "Homicídio Culposo", ato: "Se o homicídio é culposo, SEM A INTENÇÃO", multa: 40000, pena_meses: 40, fianca: 0 },
        3: { artigo: "Art. 10.2", crime: "Homicídio a Oficial", ato: "Se a vítima é Oficial da Lei pelo simples fato de sê-lo ou no exercício de suas funções", multa: 50000, pena_meses: 60, fianca: 0 },
        4: { artigo: "Art. 10.3", crime: "Latrocínio", ato: "Roubo seguido de morte", "multa": 40000, pena_meses: 50, fianca: 0 },
        5: { artigo: "Art. 11", crime: "Tentativa de Homicídio", ato: "Tentativa frustrada de matar alguém, por imperícia ou fatos supervenientes á conduta ilícita", multa: 35000, pena_meses: 40, fianca: 0 },
        6: { artigo: "Art. 11.1", crime: "Tentativa a Oficial", ato: "Se a vitima é Oficial da Lei pelo simples fato de sê-lo ou nao exercício de suas funções", multa: 40000, pena_meses: 50, fianca: 0 },
        7: { artigo: "Art. 11.2", crime: "Múltiplos Homicídios", ato: "Matar várias pessoas em um único evento", "multa": 60000, "pena_meses": 60, fianca: 0 },
        8: { artigo: "Art. 12", crime: "Sequestro e Cárcere Privado", ato: "Privar alguém de sua liberdade, mediante sequestro ou cárcere privado", multa: 30000, pena_meses: 40, fianca: 0 },
        9: { artigo: "Art. 12.1", crime: "Sequestro a Oficial", ato: "Se a vitima é Oficial da Lei pelo simples fato de sê-lo ou nao exercício de suas funções", multa: 35000, pena_meses: 60, fianca: 0 },
        10: { artigo: "Art. 12.2", crime: "Extorsão Mediante Sequestro", ato: "Sequestrar pessoas com fim de obter, para si ou para outrem, qualquer vantagem, como condição ou preço do resgate", multa: 40000, pena_meses: 50, fianca: 0 },
    },
    "CRIMES CONTRA A HONRA": {
        11: { artigo: "Art. 14", crime: "Lei de Igualdade", ato: "Todos são iguals perante a lel, sem distinção de qualquer natureza, garantindo-se aos cidadãos e aos estrangeiros residentes a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade.", multa: 0, pena_meses: 0, fianca: 0 },
        13: { artigo: "Art. 14.1", crime: "Difamação", ato: "Difamar alguém, imputando-lhe fato ofensivo à sua reputação, atribuindo palavras ou qualidades ofensivas a alguém, expor defeitos ou opinião que desqualifique a pessoa, atingindo sua honra e moral.", multa: 6000, pena_meses: 15, fianca: 14000 },
        14: { artigo: "Art. 14.2", crime: "Calúnia", ato: "Caluniar alguém, imputando-lhe falsamente fato definido como crime.", multa: 6000, pena_meses: 15, fianca: 14000 },
        15: { artigo: "Art. 14.3", crime: "Injuria", ato: "Injuriar alguém, ofendendo-lhe a dignidade, decoro, raça ou etnia" , multa: 14000, pena_meses: 25, fianca: 20000 },
        16: { artigo: "Art. 15", crime: "Ameaça", ato: "Ameaçar alguém, por palavra, escrito ou gesto, ou qualquer outro melo simbólico, de causar-lhe mal injusto e grave." , multa: 8000, pena_meses: 20, fianca: 4000 },
        17: { artigo: "Art. 15.1", crime: "Ameaça Contra Oficial", ato: "Se a vitima é Oficial da Lei pelo simples fato de sê-lo ou nao exercício de suas funções." , multa: 10000, pena_meses: 30, fianca: 6000 },
        18: { artigo: "Art. 15.2", crime: "Ameaça com violência", ato: "Se a vitima sofreu algum tipo de violência física, psicológica ou danosa de alguma forma." , multa: 10000, pena_meses:30, fianca: 6000 },    
    },
    "CRIMES INTEGRIDADE FÍSICA E BEM-ESTAR": {
        19: { artigo: "Art. 17", crime: "Crueldade animal", ato: "Praticar ato de abuso, maus-tratos, ferir ou mutilar animais domesticados, exóticos, em extinção ou não.", multa: 12000, pena_meses: 20, fianca: 24000 },
        20: { artigo: "Art. 18", crime: "Lesão Corporal", ato: "Causar dano físico a alguém.", multa: 6000, pena_meses: 20, fianca: 14000 },
        21: { artigo: "Art. 19", crime: "Omissão de Socorro", ato: "Deixar de prestar assistência, quando possível fazê-lo sem risco pessoal, à pessoa inválida ou ferida.", multa: 6000, pena_meses: 15, fianca: 14000 },
        22: { artigo: "Art. 20", crime: "Danos Morais", ato: "Destruir, inutilizar, difamar a imagem alheia." , multa: 5000, pena_meses: 15, fianca: 10000 },
        23: { artigo: "Art. 20.1", crime: "Assédio moral", ato: "Ato de perseguir ou tentar inferir ameaça em fora de pereguição a uma pessoa." , multa: 6000, pena_meses: 60, fianca: 4000 },
        24: { artigo: "Art. 21", crime: "Ato Obsceno", ato: "Praticar ato obsceno em lugar público, ou aberto ou exposto ao público.", multa: 6000, pena_meses: 20, fianca: 14000 },
        25: { artigo: "Art. 21.1", crime: "Atentado ao Pudor", ato: "Constranger alguém, mediante violência ou grave ameaça, a praticar ou permitir que com ele se pratique ato libidinoso diverso da conjunção carnal.", multa: 120000000, pena_meses: 60, fianca: 0 },
    },
    "CRIMES CONTRA O PATRIMÔNIO": {
        26: { artigo: "Art. 23", crime: "Roubo", ato: "Subtrair coisa móvel alheia, para si ou para outrem, mediante grave ameaça ou violência à pessoa.", multa: 8000, pena_meses: 30, fianca: 20000 },
        27: { artigo: "Art. 23.1", crime: "Tentativa de Roubo", ato: "Tentativa de Roubo, no caso da frustação do roubo.", multa: 6000, pena_meses: 20, fianca: 14000 },
        28: { artigo: "Art. 23.2", crime: "Furto", ato: "Subtrair, para si ou para outrem, coisa alheia móvel.", multa: 5000, pena_meses: 10, fianca: 12000 },
        29: { artigo: "Art. 24", crime: "Assalto à Loja", ato: "Tentar ou subtrair coisa alheia móvel em comércio com fim ." , multa: 15000, pena_meses: 40, fianca: 32000 },
        30: { artigo: "Art. 25", crime: "Assalto à Banco", ato: "Tentar ou subtrair coisa alheia móvel em instituição bancária de pequeno porte." , multa: 20000, pena_meses: 45, fianca: 44000 },
        31: { artigo: "Art. 26", crime: "Assalto à Joalheria", ato: "Tentar ou subtrair coisa alheia móvel em instituição bancária de pequeno porte.", multa: 25000, pena_meses: 50, fianca: 48000 },
        32: { artigo: "Art. 27", crime: "Assalto ao Banco Central", ato: "Tentar ou subtrair coisa alheia móvel em instituição bancária de pequeno porte.", multa: 50000, pena_meses: 100, fianca: 120000 },
        33: { artigo: "Art. 28", crime: "Roubo a Registradora", ato: "Tentar ou subtrair coisa alheia móvel em instituição bancária de pequeno porte.", multa: 16000, pena_meses: 60, fianca: 32000 },
        34: { artigo: "Art. 29", crime: "Roubo a Caixa Eletrônico", ato: "Tentar ou subtrair caixas eletrônicos com fim lucrativo.", multa: 16000, pena_meses: 30, fianca: 32000 },
        35: { artigo: "Art. 30", crime: "Assalto a Loja de Armas", ato: "Tentar ou subtrair coisa alheia móvel em lojas de vendas de armas e outrem.", multa: 18000, pena_meses: 40, fianca: 38000 },
        36: { artigo: "Art. 31", crime: "Lavagem, Ocultação de Bens, Direitos e Valores", ato: "Tentar ou subtrair caixas eletronicos com fim lucrativo.", multa: 34000, pena_meses: 60, fianca: 76000 },
        37: { artigo: "Art. 32", crime: "Dano ao Patrimônio", ato: "Ocultar ou dissimular a natureza, origem, localização, disposição, movimentação ou propriedade de bens, direitos ou valores provenientes, direta ou indiretamente, de infração penal.", multa: 15000, pena_meses: 40, fianca: 32000 },
        38: { artigo: "Art. 32.1", crime: "Invasão à Propriedade", ato: "Destruir, inutilizar ou deteriorar patrimônio alheio.", multa: 8000, pena_meses: 20, fianca: 18000 },
        39: { artigo: "Art. 33", crime: "Receptação", ato: "Invadir com ou sem violência à pessoa ou grave ameaça, ou mediante concurso de mais de duas pessoas, terreno ou edifício alheio.", multa: 16000, pena_meses: 30, fianca: 32000 },
        40: { artigo: "Art. 34", crime: "Estelionato", ato: "Adquirir, receber, transportar, conduzir ou ocultar, em proveito próprio ou alheio, coisa que sabe ser produto de crime, ou influir para que terceiro, de boa-fé, a adquira, receba ou oculte.", multa: 12000, pena_meses: 40, fianca: 38000 },
        41: { artigo: "Art. 34.1", crime: "Extorsão", ato: "Obter, para si ou para outrem, vantagem ilícita, em prejuízo alheio, induzindo ou mantendo alguém em erro, mediante artifício, ardil ou qualquer outro meio fraudulento.", multa: 16000, pena_meses: 30, fianca: 36000 }, 
        42: { artigo: "Art. 34.2", crime: "Evasão Financeira", ato: "Deixar de pagar por bens ou serviços recebidos.", multa: 15000, pena_meses: 30, fianca: 34000 }, 
    },
        "CRIMES DE TRÁFICO DE POSSE ILEGAL": {
        43: { artigo: "Art. 36", crime: "Posse de Substâncias Ilícitas", ato: "Importar, exportar, remeter, preparar, produzir, fabricar, adquirir, vender, expor à venda, oferecer, ter em depósito, transportar, trazer consigo, guardar, prescrever, ministrar, fornecer drogas, ainda que gratuitamente, sem autorização ou em desacordo com determinação legal ou regulamentar. Máximo de consumo 40g - 5 drogas.", multa: 18000, pena_meses: 30, fianca: 40000 },
        44: { artigo: "Art. 36.1", crime: "Posse Ilegal de Armas", ato: "Portar, deter, adquirir, fornecer, receber, ter em depósito, transportar, ceder, ainda que gratuitamente, emprestar, remeter, empregar, manter sob guarda ou ocultar arma de fogo, acessório ou munição, de uso permitido, sem autorização e em desacordo com determinação legal ou regulamentar.", multa: 20000, pena_meses: 40, fianca: 48000 },
        45: { artigo: "Art. 36.2", crime: "Posse de itens da utilização dos servidores publicos/governamentais", ato: "Utilizar ou reter consigo itens que fazem parte do trabalho de autoridades oficiais e governamentais.", multa: 24000, pena_meses: 40, fianca: 52000 },
        46: { artigo: "Art. 36.3", crime: "Posse de dinheiro sujo abaixo de 100.000", ato: "Possuir abaixo de $99.999 de dinheiro obtido de forma ilícita.", multa: 40000, pena_meses: 20, fianca: 82000 },
        47: { artigo: "Art. 36.4", crime: "Posse de dinheiro sujo acima de 100.000", ato: "Possuir acima de $100.000 de dinheiro obtido de forma ilícita.", multa: 80000, pena_meses: 40, fianca: 180000 },
        48: { artigo: "Art. 37", crime: "Trafico de órgãos", ato: "Comercializar órgãos humanos.", multa: 70000, pena_meses: 40, fianca: 140000 },
        49: { artigo: "Art. 38", crime: "Trafico de armas e munições", ato: "Distribuir, vender ou negociar armas e munições sem autorização.", multa: 70000, pena_meses: 50, fianca: 160000 },
        50: { artigo: "Art. 38.1", crime: "Posse de equipamento balistico", ato: "Utilizar equipamentos de proteção balística sem permissão.", multa: 26000, pena_meses: 40, fianca: 56000 },
    },
        "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA": {    
        51: { artigo: "Art. 41", crime: "Corrupção Passiva", ato: "Solicitar ou receber, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida ou promessa de tal vantagem.", multa: 30000, pena_meses: 40, fianca: 80000 },
        52: { artigo: "Art. 41.1", crime: "Corrupção de Autoridade", ato: "Se o Oficial da Lei, Autoridade Governamental, Agente Federal ou Agente Judiciário, após desligado ou aposentado do órgão ao qual pertencia, atender à vida da ilegalidade em menos de 10 dias.", multa: 100000, pena_meses: 50, fianca: 220000 },
        53: { artigo: "Art. 42", crime: "Corrupção Ativa", ato: "Oferecer ou prometer vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar atos administrativos.", multa: 60000, pena_meses: 60, fianca: 140000 },
        54: { artigo: "Art. 42.1", crime: "Tentativa de Suborno", ato: "Tentar subornar oficial da lei ou justiça em exercício de suas funções.", multa: 30000, pena_meses: 30, fianca: 84000 },
        55: { artigo: "Art. 43", crime: "Obstrução de Justiça", ato: "Impedir ou, de qualquer forma, tentar embarcar a investigação de qualquer infração penal ou cumprimento de ordem legal.", multa: 60000, pena_meses: 40, fianca: 128000 },
        56: { artigo: "Art. 43.1", crime: "Omissão ou Obstrução de Provas", ato: "Omitir ou obstruir prova a fim de dificultar investigação.", multa: 30000, pena_meses: 30, fianca: 64000 },
        57: { artigo: "Art. 44", crime: "Prevaricação", ato: "Retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal.", multa: 80000, pena_meses: 60, fianca: 160000 },
        58: { artigo: "Art. 4", crime: "Abuso de Autoridade", ato: "Se o Oficial da Lei, Autoridade Governamental, Agente Federal ou Agente Judiciário, cometer abuso, quer seja administrativo, moral ou físico no exercício ou não de suas funções.", multa: 24000, pena_meses: 20, fianca: 56000 },
        59: { artigo: "Art. 45", crime: "Usurpação de Função Pública", ato: "Exercer ou praticar ato de uma função pública que não lhe é devida.", multa: 60000, pena_meses: 60, fianca: 120000 },
        60: { artigo: "Art. 46", crime: "Abolição Violenta do Estado Democrático de Direito", ato: "Tentar, com emprego de violência ou grave ameaça, abolir o Estado Democrático de Direito, impedindo ou restringindo o exercício dos poderes constitucionais.", multa: 50000, pena_meses: 60, fianca: 120000 },
        62: { artigo: "Art. 47", crime: "Associação Criminosa", ato: "Associarem-se 3 (três) ou mais pessoas, para o fim específico de cometer crimes.", multa: 18000, pena_meses: 40, fianca: 40000 },
        62: { artigo: "Art. 48", crime: "Falsidade Ideológica", ato: "Alterar informações pessoais com propósito de enganar.", multa: 6000, pena_meses: 20, fianca: 18000 },
        63: { artigo: "Art. 49", crime: "Impossibilidade de Identificação", ato: "Não portar ou apresentar ao Oficial da Lei o documento de identificação quando solicitado.", multa: 6000, pena_meses: 10, fianca: 12000 },
        64: { artigo: "Art. 50", crime: "Falso Testemunho (perjúrio)", ato: "Fazer afirmação falsa, ou negar ou calar a verdade como testemunha, perito, contador, tradutor ou intérprete no processo judicial, administrativo ou inquérito policial.", multa: 40000, pena_meses: 40, fianca: 86000 },
        65: { artigo: "Art. 51", crime: "Lei de Propriedade Industrial", ato: "Prática abusiva de preços e/ou abandono.", multa: 80000, pena_meses: 60, fianca: 150000 },
        66: { artigo: "Art. 51.1", crime: "Empresa Irregular", ato: "Empresa sem alvará ou com alvará vencido.", multa: 50000, pena_meses: 0, fianca: 100000 },
        67: { artigo: "Art. 51.2", crime: "Crime Contra Relações de Consumo", ato: "Empresas que seus produtos estão sem condições de vendas ou ainda vencidos/ impróprios para consumo ou utilização.", multa: 54000, pena_meses: 30, fianca: 120000 },
        68: { artigo: "Art. 52", crime: "Venda Ilegal de Produtos Restritos Sem Licença", ato: "Vendas de produtos sem licença e falsificação de alvará de funcionamento.", multa: 40000, pena_meses: 25, fianca: 90000 },
    },
        "CRIMES CONTRA A ORDEM PÚBLICA": { 
        69: { artigo: "Art. 54", crime: "Desordem Social", ato: "Destruir, inutilizar ou deteriorar bem público ou privado, ou praticar qualquer outro crime ou ato violento, com o fim de alterar gravemente a paz pública.", multa: 5000, pena_meses: 15, fianca: 12000 },
        70: { artigo: "Art. 54.1", crime: "Apologia ao Crime", ato: "Promover ou fazer-se público apologia a atos criminosos.", multa: 50000, pena_meses: 30, fianca: 110000 },
        71: { artigo: "Art. 55", crime: "Desacato", ato: "Ofender funcionário público no exercício de sua função ou em razão dela, por palavra, escrita ou gesto.", multa: 12000, pena_meses: 20, fianca: 26000 },
        72: { artigo: "Art. 56", crime: "Desobediência", ato: "Recusar-se a cumprir ordem de funcionário público.", multa: 10000, pena_meses: 15, fianca: 22000 },
        73: { artigo: "Art. 57", crime: "Resistência à Prisão", ato: "Opor-se à execução de ato legal, mediante violência ou ameaça a funcionário competente.", multa: 5000, pena_meses: 20, fianca: 15000 },
        74: { artigo: "Art. 58", crime: "Fuga de Pessoa Presa ou Submetida à Medida de Segurança", ato: "Promover, facilitar ou tentar a fuga de pessoa legalmente presa ou submetida a medida de segurança.", multa: 16000, pena_meses: 20, fianca: 20000 },
        75: { artigo: "Art. 58.1", crime: "Fuga de Abordagem Policial",ato: "Fugir de abordagem ou revista policial.", multa: 8000, pena_meses: 20, fianca: 20000 },
        76: { artigo: "Art. 59", crime: "Ocultação Facial", ato: "Utilizar objetos para esconder o rosto com intuito de dificultar identificação.", multa: 8000, pena_meses: 10, fianca: 18000 },
        77: { artigo: "Art. 60", crime: "Multas Pendentes Acima de 50.000", ato: "Manter dívida acumulada com o governo acima do valor limite sem justificativa.", multa: 0, pena_meses: 30, fianca: 100000 },
        78: { artigo: "Art. 61", crime: "Poluição Sonora", ato: "Emitir som ou ruído em volume superior ao permitido em áreas públicas ou residenciais.", multa: 6000, pena_meses: 10, fianca: 12000 },
        79: { artigo: "Art. 62", crime: "Não Respeitar Perímetro da Ação",ato: "Civil que desobedecer a ordem oficial da lei e/ou perímetro de uma ação em andamento.", multa: 20000, pena_meses: 0, fianca: 0 },
        80: { artigo: "Art. 63", crime: "Excesso de Ficha Criminal", ato: "Quando há mais de 10 fichas criminais/ocorrências penais.", multa: 0, pena_meses: 60, fianca: 0 },
        
    },
         "CRIMES DE TRÂNSITO": {
        82: { artigo: "Art. 66", crime: "Excesso de velocidade", ato: "Transitar em velocidade superior à máxima permitida dentro dos limites urbanos, independente do meio de locomoção.", multa: 8000, pena_meses: 0, fianca: 0 },
        83: { artigo: "Art. 67", crime: "Atropelamento", ato: "Ferir pedestre devido à imprudência no trânsito.", multa: 5000, pena_meses: 15, fianca: 0 },
        84: { artigo: "Art. 68", crime: "Direção perigosa", ato: "Dirigir de forma que coloque em risco a segurança pública.", multa: 5000, pena_meses: 0, fianca: 0 },
        85: { artigo: "Art. 68.1", crime: "Corrida ilegal", ato: "Praticar corrida ilegal.", multa: 14000, pena_meses: 20, fianca: 34000, fianca: 34000 },
        86: { artigo: "Art. 69", crime: "Veículo em local proibido", ato: "Estacionar em locais não permitidos.", multa: 4000, pena_meses: 0, fianca: 0 },
        87: { artigo: "Art. 70", crime: "Veículo abandonado", ato: "Deixar veículo abandonado em via pública.", multa: 5000, pena_meses: 0, fianca: 0 },
        88: { artigo: "Art. 71", crime: "Veículo danificado", ato: "Conduzir veículo sem condições de segurança.", multa: 3000, pena_meses: 0, fianca: 0 },
        89: { artigo: "Art. 72", crime: "Utilização de veículo de terceiros para crimes", ato: "Utilizar veículos de empregos ou prestação de serviço (missões de civis) para cometer atos ilícitos.", multa: 30000, pena_meses: 30, fianca: 68000 },
        90: { artigo: "Art. 73", crime: "Tráfego aéreo", ato: "Transitar no espaço aéreo sem possuir a carteira de habilitação aérea.", multa: 30000, pena_meses: 0, fianca: 0 },
        91: { artigo: "Art. 73.1", crime: "Pouso em local indevido", ato: "Pousar em vias urbanas, prédios públicos sem a permissão, entre outros locais públicos fora do local designado.", multa: 40000, pena_meses: 0, fianca: 0 },
        92: { artigo: "Art. 73.2", crime: "Piloto perigoso", ato: "Quando ao piloto está praticando atitudes perigosas as pessoas.", multa: 50000, pena_meses: 0, fianca: 0 },
    },
};

// Função para carregar os crimes de uma categoria
function carregarCrimes(nomeTabela, crimes) {
    const tabela = document.getElementById(nomeTabela);

    Object.entries(crimes).forEach(([id, crime]) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td><input type="checkbox" value="${id}"></td>
            <td>${crime.artigo}</td>
            <td>${crime.crime}</td>
            <td>${crime.ato}</td>
            <td>$ ${crime.multa.toLocaleString()}</td>
            <td>${crime.pena_meses}</td>
            <td>$ ${crime.fianca.toLocaleString()}</td>
        `;
        tabela.appendChild(linha);
    });
}
function carregarCategorias() {
    const divTabela = document.getElementById("tabela-crimes");

    Object.entries(crimesPorCategoria).forEach(([categoria, crimes]) => {

        const titulo = document.createElement("h3");
        titulo.textContent = categoria.replace(/_/g, " ");
        divTabela.appendChild(titulo);

        const tabela = document.createElement("table");
        tabela.innerHTML = `
            <thead>
                <tr>
                    <th>Selecionar</th>
                    <th>Artigo</th>
                    <th>Crime</th>
                    <th>Ato</th>
                    <th>Multa ($)</th>
                    <th>Pena (meses)</th>
                    <th>Fiança ($)</th>
                </tr>
            </thead>
            <tbody id="${categoria}-table"></tbody>
        `;
        divTabela.appendChild(tabela);

        // Carrega os crimes na tabela
        carregarCrimes(`${categoria}-table`, crimes);
    });
}

// Função para calcular os totais
function calcularTotais() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    const idsSelecionados = Array.from(checkboxes).map((checkbox) => checkbox.value);

    let totalMulta = 0;
    let totalPena = 0;
    let totalFianca = 0;

    Object.entries(crimesPorCategoria).forEach(([_, crimes]) => {
        idsSelecionados.forEach((id) => {
            if (crimes[id]) {
                totalMulta += crimes[id].multa;
                totalPena += crimes[id].pena_meses;
                totalFianca += crimes[id].fianca;
            }
        });
    });

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Total de multa: $ ${totalMulta.toLocaleString()}</p>
        <p>Total de pena: ${totalPena} meses</p>
        <p>Total de fiança: $ ${totalFianca.toLocaleString()}</p>
    `;
}

// Inicializa a tabela ao carregar a página
window.onload = carregarCategorias;
