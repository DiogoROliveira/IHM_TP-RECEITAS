import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    { id: 1, 
      title: 'Bacalhau à Moda de Viana', 
      description: 'Esta receita é feita com postas de bacalhau do lombo dessalgadas, envolvidas em folhas de couve lombarda.', 
      ingredients: [
        {name: 'Lombo de bacalhau demolhado',quantity: '900 g'}, 
        {name: 'Azeite', quantity: '8 c. de sopa'},
        {name: 'Cebola', quantity: '200 g'},
        {name: 'Alho', quantity: '3 dente'},
        {name: 'Batata para cozer', quantity: '900 g'},
        {name: 'Sal', quantity: '2 c. de chá'},
        {name: 'Brócolos', quantity: '600 g'},
        {name: 'Azeitona preta', quantity: '12 unid.'},
        {name: 'Salsa fresca', quantity: '1 q.b.'}
      ], 
      preparation:[
      
      'Coloque os lombos de bacalhau num tacho e deite por cima água a ferver. Deixe de molho uns momentos apenas, para ajudar a abrir lascas. Escorra imediatamente e enxugue num pano.',

      'Aqueça uma colher de sopa de azeite num grelhador e coloque o bacalhau por cima. Deixe cozinhar durante cerca de 15 a 20 minutos. Este processo também pode ser feito nas brasas.',
      
      'Enquanto o bacalhau assa, deite o restante azeite num tacho, junte as cebolas e dois dentes de alho descascados e cortados em fatias e deixe cozinhar tapado em lume brando para que a cebola não aloure e fique apenas “estalada”.',
      
      'Coza as batatas em água temperada com uma colher de chá de sal. Deixe cozer por cerca de 15 minutos ou até estarem tenras.',
      
      'Noutra panela, coza os brócolos em água a ferver temperada com o restante sal.',
      
      'Quando o bacalhau estiver assado, coloque na travessa ou num prato de barro regional e deite sobre ele a cebolada e o respetivo azeite. Em redor disponha as batatas cozidas, partidas em rodelas e os brócolos.',
      
      'Coloque por cima as azeitonas e polvilhe com salsa picada.',

      'Bom apetite!😋'
      ],
      history:`O "Bacalhau à Moda de Viana" é uma especialidade gastronômica emblemática da cidade de Viana do Castelo, em Portugal. Este prato reflete a tradição pesqueira da região, onde o bacalhau é um ingrediente fundamental na culinária local. 
      Na preparação deste prato, o bacalhau é cozido lentamente e acompanhado por uma combinação de batatas, cebolas, pimentos e azeite, resultando em uma refeição reconfortante e cheia de sabor. 
      O Bacalhau à Moda de Viana é apreciado não apenas por sua deliciosa combinação de ingredientes, mas também por sua relevância cultural e histórica, representando uma parte importante da identidade gastronômica da cidade.`
    },
    { id: 2,
      title: 'Rojões à Moda do Minho',
      description: 'Os rojões à moda do Minho são um prato típico e delicioso da cozinha portuguesa',
      ingredients: [
        {name: 'Carne de porco (perna, barriga e entremeada)', quantity: '1 kg'},
        {name: 'Sal', quantity: 'q.b.'},
        {name: 'Alho', quantity: '4 dente'},
        {name: 'Pimentão-doce', quantity: '1 c. de sopa'},
        {name: 'Cominhos', quantity: '1 c. de sopa.'},
        {name: 'Colorau', quantity: '1 c. de sopa.'},
        {name: 'Vinho branco', quantity: '1 dl'},
        {name: 'Banha', quantity: 'q.b.'},
        {name: 'Louros', quantity: 'q.b.'},
        {name: 'Piri-piri', quantity: 'q.b.'},
        {name: 'Batatas', quantity: 'q.b.'}
      ],
      preparation: [
       
        'Corte a carne de porco em cubos e tempere com sal, alho picado, pimentão-doce, cominhos, colorau, vinho branco, louro e piri-piri. Deixe marinar durante pelo menos 2 horas.',
  
        'Num tacho, derreta a banha e frite a carne até ficar dourada e tenra.',
    
        'Entretanto, lave bem as batatas com casca e corte-as em cubos pequenos.',

        'Numa frigideira, frite as batatas em óleo bem quente até ficarem douradas e crocantes.',
    
        'Sirva os rojões acompanhados das batatas fritas.',
    
        'Bom apetite!😋',
      ],
      history: `Os Rojões à Moda do Minho são um prato tradicional da região do Minho, em Portugal. 
      Preparados com pedaços de carne de porco cozidos lentamente em banha e temperados com alho e louro, os rojões refletem a rica tradição gastronômica rural da região. 
      Este prato, que remonta a tempos antigos, é apreciado por sua simplicidade e sabor robusto, tornando-se um ícone da culinária portuguesa.`
    },
    { id: 3,
      title: 'Pescada à Vianense',
      description: 'Uma deliciosa receita de pescada à moda de Viana do Castelo, com um sabor tradicional e reconfortante.',
      ingredients: [
        {name: 'Pescada', quantity: '4 unid.'},
        {name: 'Cebolas', quantity: '2 unid.'},
        {name: 'Dentes de alho', quantity: '2 unid.'},
        {name: 'Tomates maduros', quantity: '2 unid.'},
        {name: 'Pimento vermelho', quantity: '1 unid.'},
        {name: 'Azeite', quantity: '1 dl'},
        {name: 'Vinho branco', quantity: '100 ml'},
        {name: 'Água', quantity: '100 ml'},
        {name: 'Sal e pimenta', quantity: 'q.b.'},
        {name: 'Salsa picada', quantity: 'q.b.'},
      ],
      preparation: [
        
        'Num tacho, coloque o azeite, as cebolas picadas, os alhos picados, o tomate sem pele e sementes cortado em pedaços, e o pimento vermelho cortado em tiras. Leve ao lume e deixe refogar um pouco.',
    
        'Adicione as postas de pescada, o vinho branco, a água, o sal e a pimenta. Deixe cozinhar em lume médio por cerca de 20 minutos, virando as postas a meio do tempo.',

        'Retire as postas para um prato de servir e regue com o molho. Polvilhe com salsa picada antes de servir.',
    
        'Sirva acompanhado de batatas cozidas e legumes a gosto.',
    
        'Bom apetite!😋',
      ],
      history: `
      A Pescada à Vianense é um prato icônico de Viana do Castelo, caracterizado pela simplicidade e frescura dos ingredientes. 
      Nesta receita, filés de pescada são delicadamente preparados e servidos com um molho rico à base de cebola, alho e tomate, realçando o sabor suave do peixe. 
      Este prato é uma celebração da riqueza marinha da região e uma escolha popular para quem deseja desfrutar da autêntica culinária vianense.`
    },
    {
      id: 4,
      title: 'Santola Recheada',
      description: 'Uma entrada deliciosa e sofisticada, perfeita para surpreender os convidados em ocasiões especiais.',
      ingredients: [
        {name: 'Santola', quantity: '1 unid.'},
        {name: 'Miolo de camarão', quantity: '150 g'},
        {name: 'Ovos cozidos', quantity: '2 unid.'},
        {name: 'Cebola', quantity: '1 unid.'},
        {name: 'Alho', quantity: '2 dente'},
        {name: 'Pimento vermelho', quantity: '1 unid.'},
        {name: 'Salsa picada', quantity: 'q.b.'},
        {name: 'Azeite', quantity: 'q.b.'},
        {name: 'Sal e pimenta', quantity: 'q.b.'},
        {name: 'Pão ralado', quantity: 'q.b.'}
      ],
      preparation:[
        
        'Coza a santola em água com sal por cerca de 20 minutos. Retire a santola, deixe arrefecer e abra-a ao meio.',
    
        'Retire todo o miolo e reserve. Pique a cebola, os alhos e o pimento e refogue num pouco de azeite. Junte o miolo da santola e o miolo de camarão picado. Deixe cozinhar por uns minutos.',
    
        'Num recipiente, misture este preparado com os ovos cozidos picados e salsa picada. Tempere com sal e pimenta.',
    
        'Recheie a carapaça da santola com este preparado, polvilhe com pão ralado e leve ao forno pré-aquecido a 180°C por cerca de 20 minutos, ou até dourar.',
    
        'Sirva a santola recheada ainda quente, decorada a gosto.',

        'Bom apetite!😋',
      ],
      history: `A Santola Recheada é uma iguaria tradicional da culinária portuguesa, especialmente popular nas regiões costeiras. 
      Este prato destaca-se pela sua preparação cuidadosa e pela utilização de ingredientes frescos e saborosos. 
      A santola, também conhecida como caranguejo-real, é o ingrediente principal desta receita, sendo cuidadosamente cozida e depois recheada com uma mistura de carne de santola desfiada, pão, ervas aromáticas, cebola e outros condimentos. 
      O resultado é uma combinação irresistível de sabores marinhos e texturas suculentas, que fazem da Santola Recheada uma verdadeira iguaria para os amantes de frutos do mar. 
      Este prato é frequentemente servido como uma entrada ou prato principal em ocasiões especiais, celebrando a riqueza dos produtos do mar e a tradição gastronômica portuguesa.`
    },
    {
      id: 5,
      title: 'Torta de Viana',
      description: 'Uma sobremesa tradicional da região de Viana do Castelo, esta torta é um verdadeiro deleite para os apreciadores de doces.',
      ingredients: [
        {name: 'Ovos', quantity: '6 unid.'},
        {name: 'Açúcar', quantity: '150 g'},
        {name: 'Farinha de trigo', quantity: '100 g'},
        {name: 'Fermento em pó', quantity: '1 c. de chá'},
        {name: 'Natas', quantity: '200 ml'},
        {name: 'Açúcar em pó', quantity: 'q.b.'},
        {name: 'Manteiga', quantity: 'q.b.'}
      ],
      preparation: [
        
        'Pré-aqueça o forno a 180°C. Unte uma forma retangular com manteiga e forre-a com papel vegetal, também untado com manteiga.',
    
        'Separe as gemas das claras. Bata as claras em castelo e reserve.',
    
        'Noutra taça, bata as gemas com o açúcar até obter um creme esbranquiçado e fofo. Adicione as natas e misture bem.',
    
        'Acrescente a farinha peneirada com o fermento, envolvendo delicadamente.',
    
        'Por fim, adicione as claras em castelo, envolvendo cuidadosamente para não perderem o volume.',
    
        'Verta a massa na forma preparada e leve ao forno por aproximadamente 15 minutos, ou até estar cozida e dourada.',
    
        'Retire do forno e deixe arrefecer por alguns minutos. Desenforme sobre um pano polvilhado com açúcar em pó e enrole com cuidado.',
    
        'Deixe arrefecer completamente antes de servir. Polvilhe com mais açúcar em pó antes de servir, se desejar.',
    
        'Bom apetite!😋',

      ],
      history: `A Torta de Viana é uma sobremesa tradicional e emblemática da cidade de Viana do Castelo, em Portugal. 
      Esta iguaria é conhecida pela sua massa macia e recheio doce e cremoso, geralmente feito com uma combinação de ovos, açúcar, amêndoas e aromatizado com canela ou limão. 
      A Torta de Viana é frequentemente decorada com padrões intricados, refletindo a rica herança cultural e artística da região. 
      Esta sobremesa é apreciada não apenas pelo seu sabor delicioso, mas também como um símbolo da tradição gastronômica local e uma lembrança memorável para os visitantes que exploram a encantadora cidade de Viana do Castelo.`
    },
    {
      id: 6,
      title: 'Cabrito à Serra d’Arga',
      description: 'Um prato tradicional da região, o cabrito à Serra d’Arga é uma deliciosa opção para uma refeição especial.',
      ingredients: [
        {name: 'Cabrito(pequeno)', quantity: '2 Kg'},
        {name: 'Limão', quantity: '2 unid.'},
        {name: 'Sal grosso', quantity: 'q.b.'},
        {name: 'Vinho verde branco', quantity: '0,5 l'},
        {name: 'Colorau/Pimentão', quantity: '1 c. de sopa'},
        {name: 'Louro', quantity: '1 folha'},
        {name: 'Alho', quantity: '2 dente'},
        {name: 'Agua', quantity: '1,5 l'},
        {name: 'Batatas', quantity: '0,5 Kg'},
        {name: 'Banha de Porco', quantity: '2 c. de sopa'},
        {name: 'Arroz (carolino)', quantity: '300 g'},
        {name: 'Rebentos de Carqueija', quantity: 'q.b.'},
        {name: 'Galinha de Campo', quantity: '250 g'},
        {name: 'Presunto da Montaria', quantity: '100 g'},
        {name: 'Cebolas', quantity: '3 unid.'},
        {name: 'Ramo de salsa', quantity: '1 unid.'},
        {name: 'Molho de grelos', quantity: '1 unid.'},
        {name: 'Laranja', quantity: '1 unid.'}
      ],
      preparation: [
        'Amanha-se o Cabrito e corta-se em pedaços. Escalda-se em água, para retirar o sabor e cheiro característico desta carne, deixa-se arrefecer e coloca-se numa boa vinha de alhos, durante 24 horas.',
        
        'No dia seguinte prepara-se uma assadeira de barro, em que se coloca previamente, o cabrito numa base de cebola, salsa, azeite e banha de porco (q.b.).',
        
        'Depois de tudo pronto rega-se com um bom vinho branco verde e vai ao forno durante 60 minutos, preferencialmente em forno a lenha, não sendo possível no forno elétrico/gás, a uma temperatura média de 180º. Vai-se voltando as peças de carne e regando com a vinha de alhos.',
        
        'Mais ao menos a meio tempo colocam-se as batatas que ficam a assar até ao fim.',
        
        'Para o Arroz de Carqueija, estala-se a cebola, junta-se o arroz (carolino), refoga-se o arroz, de seguida coloca-se o caldo, previamente preparado. O caldo é produto da cozedura de uma galinha do campo e um pedaço de presunto da Montaria. Põe-se no caldo uma boa manada de rebentos de carqueija bem lavados,1 cebola e 1 ramo de salsa, temperando de sal. Para 300gr de arroz são necessários mais ou menos 600gr de caldo.',
        
        'Lavam-se os grelos, cozem-se em água com sal, depois de cozidos salteiam-se em azeite e alho.',
        
        'Bom apetite!😋',
      ],
      history: `O Cabrito à Serra d’Arga é conhecido por sua simplicidade e sabor autêntico. 
      Originado das montanhas da Serra d’Arga, este prato destaca-se pelo uso de carne tenra de cabrito, marinada em temperos tradicionais e cozida lentamente até ficar macia e suculenta. Geralmente, é acompanhado por batatas assadas ou arroz de feijão, complementando os sabores ricos e intensos da carne. 
      O Cabrito à Serra d’Arga é uma verdadeira celebração da gastronomia local, refletindo a conexão profunda entre a comunidade e a terra que os rodeia.`
    },
    {
      id: 7,
      title: 'Arroz Doce Cremoso',
      description: 'Um clássico da doçaria portuguesa, o arroz doce cremoso é uma sobremesa reconfortante e deliciosa.',
      ingredients: [
          { name: 'Arroz carolino', quantity: '200 g' },
          { name: 'Leite meio gordo', quantity: '1 l' },
          { name: 'Açúcar em pó', quantity: '200 g' },
          { name: 'Casca de limão', quantity: '1 unid.' },
          { name: 'Sal', quantity: '1 c. de café' },
          { name: 'Gemas de ovo', quantity: '3 unid.' },
          { name: 'Canela em pó', quantity: 'q.b.' }
      ],
      preparation: [
          'Leve ao lume um tacho com o leite, o açúcar, o arroz e o sal e quando levantar fervura introduza a casca de limão.',
          'Deixe cozer em lume brando, mexendo de vez em quando, até o arroz estar bem cozido mas ainda caldoso.',
          'Desfaça as gemas com um garfo numa tigela, junte um pouco do arroz cozido, mexa e misture tudo no tacho.',
          'Leve novamente ao lume, agora muito baixo, e mexa cerca de um minuto.',
          'Retire do lume e distribua por taças individuais ou numa travessa funda.',
          'Depois de frio, polvilhe com canela.',
          'Bom apetite!😋',
      ],
      history: 'O arroz doce é uma sobremesa tradicional em muitas culturas ao redor do mundo. Em Portugal, é uma presença comum nas mesas, especialmente em festas e ocasiões especiais. Esta receita apresenta uma versão cremosa e aromática, com o sabor delicado da casca de limão e do pau de canela.'
  },
  {
    id: 8,
    title: 'Sopa à Lavrador',
    description: 'Uma sopa reconfortante e nutritiva, perfeita para os dias mais frios.',
    ingredients: [
        { name: 'Batatas', quantity: '400 g' },
        { name: 'Massa macarrão grande', quantity: '100 g' },
        { name: 'Folhas grandes de couve lombarda', quantity: '8 unid.' },
        { name: 'Lata grande de feijão vermelho', quantity: '1 unid.' },
        { name: 'Cebola', quantity: '1 unid.' },
        { name: 'Alho', quantity: '2 dente' },
        { name: 'Azeite', quantity: '0,5 dl' },
        { name: 'Cubo de caldo de carne', quantity: '1 unid.' },
        { name: 'Sal', quantity: 'q.b.' }
    ],
    preparation: [
        'Descasque e lave as batatas, a cebola e os dentes de alho. Corte tudo em pedaços e deite-os para uma panela.',
        'Junte 3/4 do feijão com o molho, o azeite e o caldo de carne. Adicione água até cobrir e leve ao lume durante 30 minutos ou até que tudo fique cozido.',
        'Retire do lume e reduza a puré. Rectifique o sal e acrescente mais água se necessário. Leve novamente ao lume.',
        'Arranje a couve lombarda, corte-a em pedaços sem a parte mais dura e junte-os à panela.',
        'Adicione igualmente a massa e deixe cozinhar durante mais 10 minutos ou até que tudo fique macio.',
        'Junte o resto do feijão, deixe levantar fervura, retire do lume, deite para uma terrina e sirva bem quente.',
        'Bom apetite!😋',
    ],
    history: 'A Sopa à Lavrador é uma receita tradicional portuguesa, sendo especialmente popular nas regiões rurais. Ela é uma refeição completa, rica em legumes e carboidratos, perfeita para alimentar os trabalhadores no campo. Esta sopa é reconfortante e nutritiva, sendo apreciada por pessoas de todas as idades.'
}];

  constructor() {}

 
  getAllRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipeById(id: number): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }
}
